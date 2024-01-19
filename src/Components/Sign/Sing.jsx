import { useState } from 'react';
import { auth } from '../Firebase/config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Sign() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  return (
    <>
      <Link variant="primary" onClick={handleShow} style={{textDecoration: 'none', color: 'black', fontWeight: 'normal'}}>
        Sign
      </Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h1 className="fs-2">Login</h1></Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <form onSubmit={signIn}>
              <div className="form-outline mb-3">
                <input type="email" id="signInput" className="form-control email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="sign-label bk-first">Email address</label>
              </div>
                <div className="form-outline mb-3">
                  <input type="password" className="form-control pass" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label className="sign-label bk-first">Password</label>
                </div>
              <button type="submit" className="btn btn-primary btn-block mb-4 signInBtn" onClick={handleClose}>Sign in</button>
            </form>
              <div className="sign hr-lines">
                <h4 className="fs-6">Or</h4>
              </div>
            <div className="register">
              <h2 className="register-title fs-2">Register</h2>
            </div>
          <form onSubmit={signUp}>
            <div className="form-outline mb-3">
              <input type="text" className="form-control full" placeholder="name"  />
              <label className="sign-label bk-first">Full name</label>
            </div>
              <div className="form-outline mb-3">
                <input type="email" className="form-control emailR" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="sign-label bk-first">Enter your email</label>
              </div>
              <div className="form-outline mb-3">
                <input type="password" className="form-control passR" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label className="sign-label bk-first">password</label>
              </div>
            <button type="submit" className="btn btn-primary btn-block mb-4 signInBtn" onClick={handleClose}>Sign up</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sign;
