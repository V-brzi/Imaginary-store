import React, { useContext } from 'react'
import "./Login.css"
import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const auth = getAuth(app);

  // create a useState for email and passwor
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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

        <button onClick={signin} className='mt-3 btn-colr' type='submit'>Login</button>
      </div> 

      <div>

            <p className='text-black text-center mt-3'>Don't have an account? <span className='text-white-700 font-semibold'><Link to="/SignUp">Sign up</Link></span></p>
         </div>

      </div>

      
    </div>
  );
  }

export default Login