import { useState, useEffect } from 'react';
import { auth, db } from '../Firebase/config';
import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Button, Container, Form } from 'react-bootstrap';

function SignUp() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            await updateProfile(userCredential.user, {
                displayName: `${name} ${lastName}`,
            });
            
            await sendEmailVerification(auth.currentUser);
            console.log('Verification email sent')
            
            await addDoc(collection(db, 'users'), {
                uid: userCredential.user.uid,
                name: name,
                lastName: lastName,
                email: email,
            });
            console.log('User Information:', userCredential.user);

            setName('');
            setLastName('');
            setEmail('');
            setPassword('');
        } 
        catch (error) {
            console.error('Error creating user or sending verification email', error);
        }
    };

    return (
        <Container className='modal-header signUp'>
            <div>
                <div className='upContent fs-2'>
                    <h1>Sign Up</h1>
                </div>
                <Form onSubmit={signUp}>
                    <div className="form-outline mb-3">
                        <Form.Control type="text" className="form-control passR sp" value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Label id="sign-label">First Name</Form.Label>
                    </div>
                        <div className="form-outline mb-3">
                            <Form.Control type="text" className="form-control full sp" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <Form.Label id="sign-label">Last Name</Form.Label>
                        </div>
                            <div className="form-outline mb-3">
                                <Form.Control type="email" className="form-control emailR  sp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Form.Label id="sign-label">Enter Your Email</Form.Label>
                            </div>
                        <div className="form-outline mb-3">
                            <Form.Control type="password" className="form-control passR sp" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Form.Label id="sign-label">Password</Form.Label>
                        </div>
                        <Button type="submit" className="btn btn-primary btn-block mb-4 signInBtn">Sign in</Button>
                    
                </Form>
            </div>
        </Container>
    );
}

export default SignUp;