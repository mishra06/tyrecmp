// components/SignUp.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import crossIcon from "../../assets/cross_icon.png";

const SignUp = ({ setCurrentState }) => {
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Call API to create new user
    // For demo purposes, we'll just log the user in
    login(username);
  };

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>Sign up</h2>
          <img src={crossIcon} alt="" />
        </div>
        <div className="login-popup-input">
          <input type="text" placeholder='Your Name' required name="username"/>
          <input type="email" placeholder='Your Emailid' required name="email"/>
          <input type="password" placeholder='Password' required name="password"/>
        </div>
        <button>Create account</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use and privey policy</p>
        </div>
        <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
      </form>
    </div>
  );
};

export default SignUp;