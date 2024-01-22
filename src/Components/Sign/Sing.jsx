import { useState } from 'react';
import { auth } from '../Firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from "/images/user-128.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        console.log(userCredential);
        setEmail('');
        setPassword('');
        console.log("sign in successful");
        handleClose(); 
        toast.warning('Sign In Successful', {
          autoClose: 2000,
          position: "top-center",
          hideProgressBar: true,
          style: {
            backgroundColor: "#ff972f",
            border: "2px solid green",
            color: "white",
          }
        });
      })
    .catch((error) => {
      console.log(error);
        toast.error(`Sign In Failed: ${error.message}`, {
          autoClose: 2000,
          position: "top-center",
          hideProgressBar: true,
        style: {
          backgroundColor: "#ff2f2f",
          border: "2px solid green",
          color: "white",
        }
      });
    });
  };

  return (
    <>
      <Link variant="primary" onClick={handleShow} style={{textDecoration: 'none', color: 'black', fontWeight: 'lighter', }}>
        <span className="signTitle d-none d-xl-block">Sign</span>
        <span><img src={User} alt="" width={35} className='d-xl-none' /></span>
      </Link>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <Button id="btn-close" onClick={handleClose}><p>X</p></Button>
            <div>
              <h1 className="modal-header">Login</h1>
            </div>
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
          <Link to={'/signup'} type="submit" className="btn btn-primary btn-block mb-4 signInBtn" onClick={handleClose}>Sign Up</Link> 
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sign;
