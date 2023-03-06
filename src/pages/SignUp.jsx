import React from 'react'
import "./Login.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";
import {app, db} from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore'


const SignUp = () => {

  const navigate = useNavigate();

    const auth = getAuth(app);

    // create a useState for email and password

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {

             // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/store');
            // ...

            setDoc(doc(db,'users', userCredential.user.uid),{
              favorites: [],
              cart: []
            })
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // ..

            alert(errorCode);
          });
    }

  return (
    
    <div className='l-cont'>
    <div className='sm-cont'>
      <h2><i class="fa-solid fa-user-plus"></i>&nbsp;Sign Up</h2>
      <hr/>
      <div>
        <div className='mt-3'>
          <label>Email</label>
          <input type="text" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          
        </div>

        <div className='mt-3'>
          <label>Password</label>
          <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
          
        </div>

        <button onClick={signup} className='mt-3 btn-colr' type='submit'>Sign Up</button>
      </div> 

      <div>
            <p className='text-black text-center mt-3'>have an account? <span className='text-white-700 font-semibold'><Link to="/login">Login</Link></span></p>
         </div>

      </div>

      
    </div>
  );
  }

export default SignUp