import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'


function App() {
 
    
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path='/' index element={<LoginPage />} />
          <Route path="Signup" element={<SignupPage />} />
      </Routes>
      </BrowserRouter>
    </>
    );
}
export default App;