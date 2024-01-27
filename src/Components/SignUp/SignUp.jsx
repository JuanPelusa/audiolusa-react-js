import { useState, useEffect } from 'react';
import { auth, db } from '../Firebase/config';
import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
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
                phone: phone,
                email: email,
            });
            console.log('User Information:', userCredential.user);

            setName('');
            setLastName('');
            setPhone('');
            setEmail('');
            setPassword('');
            toast.warning('Sign Up Successfully', {
                autoClose: 2000,
                position: "top-center",
                hideProgressBar: true,
                style: {
                    backgroundColor: "#ff972f",
                    border: "2px solid green",
                    color: "white",
                }
            });
        } 
        catch (error) {
            console.error('Error creating user or sending verification email', error);
            toast.error(`Sign Up Failed: ${error.message}`, {
                autoClose: 2000,
                position: "top-center",
                hideProgressBar: true,
                style: {
                    backgroundColor: "#d91e1e",
                    border: "2px solid green",
                    color: "white",
                }
            });
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
                                <Form.Control type="email" className="form-control email  sp" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Form.Label id="sign-label">Enter Your Email</Form.Label>
                            </div>
                        <div className="form-outline mb-3">
                            <Form.Control type="number" className="form-control phone sp" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <Form.Label id="sign-label">Phone Number</Form.Label>
                        </div>
                    <div className="form-outline mb-3">
                        <Form.Control type="password" className="form-control passR sp" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Form.Label id="sign-label">Password</Form.Label>
                    </div>
                    <Button type="submit" className="btn btn-primary btn-block mb-4 signInBtn">Sign Up</Button>
                </Form>
            </div>
        </Container>
    );
}

export default SignUp;