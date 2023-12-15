import React, { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase';
import './SignupPage.css';
import Header from '../components/Header';

const SignupPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate()
  const Signup = () => {
    try {
      if (passwordRef.current.value.length > 8) {
        if (passwordRef.current.value === passwordConfirmRef.current.value) {
          navigate('/Home')
          return createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        } else {
          console.log(passwordRef.current.value)
          console.log(passwordConfirmRef.current.value)
          console.log('Password does not match');
          
        }
      } else {
        console.log('Password should be longer than 8 characters');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Header />
    <div className='signup-container'>
      <div className='signup-form'>
        <h2>Sign up</h2>
        <input ref={emailRef} type='email' name='email' placeholder='Email' />
        <input ref={passwordRef} type='password' name='password' placeholder='Password' />
        <input ref={passwordConfirmRef} type='password' name='password-confirm' placeholder='Password Confirm' />
        <button onClick={Signup}>Sign up</button>
      </div>
    </div>
    </>
  );
};

export default SignupPage;
