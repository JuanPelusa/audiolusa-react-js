import { useState, useEffect } from 'react';
import { auth } from '../Firebase/config';
import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Form } from 'react-bootstrap';

function SignUp() {

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

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log(userCredential)
        sendEmailVerification(auth.currentUser)
            console.log('Verification email sent');
            setEmail('');
            setPassword('')
        })
        .catch((error) => {
        console.error('Error sending verification email', error);})
    }

    return (
        <Container className='modal-header signUp'>
            <div>
                <div className='upContent fs-2'>
                    <h1>Sign Up</h1>
                </div>
                <Form onSubmit={signUp}>
                    <div className="form-outline mb-3">
                        <Form.Control type="text" className="form-control passR sp" />
                        <Form.Label id="sign-label">First Name</Form.Label>
                    </div>
                        <div className="form-outline mb-3">
                            <Form.Control type="text" className="form-control full sp" />
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