// components/SignIn.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import assets from "../../assets/cross_icon.png"
import "./index.css"

const Signin = ({ setCurrentState }) => {
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    login(username);
  };

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <img src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          <input type="text" placeholder='Your Emailid' required name="username"/>
          <input type="password" placeholder='Password' required />
        </div>
        <button>Login</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use and privey policy</p>
        </div>
        <p>Don't have an account? <span onClick={()=> setCurrentState("Sign up")}>Sign up here</span></p>
      </form>
    </div>
  );
};

export default Signin;