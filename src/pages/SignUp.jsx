import React from 'react'
import "./Login.css"

import {Link} from "react-router-dom";

const SignUp = () => {

  return (
    
    <div className='l-cont'>
    <div className='sm-cont'>
      <h2><i class="fa-solid fa-user-plus"></i>&nbsp;Sign Up</h2>
      <hr/>
      <div>
        <div className='mt-3'>
          <label>Email</label>
          <input type="text" placeholder="Enter email" />
          
        </div>

        <div className='mt-3'>
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          
        </div>

        <button className='mt-3 btn-colr' type='submit'>Sign Up</button>
      </div> 

      <div>
            <p className='text-black text-center mt-3'>have an account? <span className='text-white-700 font-semibold'><Link to="/login">Login</Link></span></p>
         </div>

      </div>

      
    </div>
  );
  }

export default SignUp