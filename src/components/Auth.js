// components/App.js
import React, { useState } from 'react';
import SignUp from './UserLog/SignUp';
import Signin from './UserLog/SignIn';

const App = () => {
  const [currentState, setCurrentState] = useState('Login');

  return (
    <div>
      {currentState === 'Login' && <Signin setCurrentState={setCurrentState} />}
      {currentState === 'Sign up' && <SignUp setCurrentState={setCurrentState} />}
    </div>
  );
};