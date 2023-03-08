import React, { useContext } from 'react'
import "./Login.scss"
import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {app} from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

const Login = () => {

  const navigate = useNavigate();

  const auth = getAuth(app);

  // create a useState for email and passwor
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {currentUser, setCurrentUser} = useContext(Context);


  const signin = () => {

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

       // Signed in 
       const user = userCredential.user;
       navigate('/store');
       // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode);
    });
  }

  const signUserOut = () => {
      signOut(auth).then(() => {
      // Sign-out successful.
      setCurrentUser("")
      navigate('/store');
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      alert(errorCode);
    });
  }
  return (
    
    <div className='l-cont'>
    <div className='sm-cont'>
      <h2><i className="fa-solid fa-right-to-bracket"></i>&nbsp;Login</h2>
      <hr/>
      <div>
        <div className='mt-3'>
          <label>Email</label>
          <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
          
        </div>

        <div className='mt-3'>
          <label>Password</label>
          <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
          
        </div>

        {currentUser !== "" ? 
        <button disabled className='mt-3 btn-disbl' type='submit'>Login</button> : 
        <button onClick={signin} className='mt-3 btn-colr' type='submit'>Login</button>
        }
      </div> 

      <hr className='mt-4' />

      <div>
        {currentUser == "" ?
        <p className='text-black text-center mt-1'>Don't have an account? <span className='text-white-700 font-semibold'><Link to="/SignUp">Sign up</Link></span></p> :
        <button onClick={signUserOut} className='mt-1 py-1 text-sm btn-sign-out'>Sign out&nbsp;<i className="fa-solid fa-right-from-bracket"></i></button>
        }
      </div>

      </div>

      
    </div>
  );
  }

export default Login