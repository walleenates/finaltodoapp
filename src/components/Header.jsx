import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Home.css';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const SignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <>
    <div>
      
      <div className='header-container'>
        <div className='nav-bar'>
          {auth.currentUser ? (
            <Link to='/'>Home</Link>
          ) : (
            <div className='userAction'>
              <Link to='/Login'>Login</Link>
              <Link to='/signup'>SignUp</Link>
            </div>
          )}

{currentUser && (
  <div className="user-info-container">
    <h3 className="welcome-message">Welcome, User!</h3>
    <p className="user-email">{currentUser.email}</p>
  </div>
)}



          <div className='logout-but'>
            {auth.currentUser ? <button onClick={SignOut}>Log Out</button> : null}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
