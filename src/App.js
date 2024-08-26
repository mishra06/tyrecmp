// import { AuthProvider } from './context/AuthContext';
import React from 'react';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenSec from './Screen/ScreenSec';
// import SignIn from './components/UserLog/SignIn';
// import SignUp from './components/UserLog/SignUp';

function App() {
  // return (
  //   <BrowserRouter>
  //     <AuthProvider>
  //       <div className="App">
  //         <Routes>
  //           <Route path="/" element={<ScreenSec />} />
  //           <Route path="/login" element={<SignIn />} />
  //           <Route path="/signup" element={<SignUp />} />
  //         </Routes>
  //       </div>
  //     </AuthProvider>
  //   </BrowserRouter>
  // );
  return(
    <div className="App">
        <ScreenSec/>
    </div>
  )
}

export default App;