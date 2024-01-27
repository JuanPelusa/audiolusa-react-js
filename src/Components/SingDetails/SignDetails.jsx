import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/config";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const userLog = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      userLog();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        toast.success('Sign Out Successfuly', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          style: {
            backgroundColor: "#ff2f2f",
            border: "2px solid green",
            color: "white",
          }
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Sign Out Failed: ${error.message}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          style: {
            backgroundColor: "#ff972f",
            border: "2px solid green",
            color: "white",
          }
        });
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <Link to={'/account'} style={{textDecoration: 'none', color: 'black'}}><span>{authUser.email}</span></Link>
          <Link to={'/'} id="outButton" onClick={userSignOut}>/Sign Out➡️</Link>
        </>
      ) : (
        <br />
      )}
    </div>
  );
};

export default AuthDetails