import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import './Home.css';  // Use a separate CSS file for performance
import { useContext } from 'react';
import { userContext } from './Context';
const Appbar = () => {
  // const [user, setUser] = useState(null); // State to hold the logged-in user
  const [user, setuser] = useContext(userContext);
  const handleLogout = () => {
    setuser(null); // Clear the user state
  };

  return (
    <div>
      <header className="appbar-container">
        <div className="site-logo">
          <h1>Farm Links</h1>
        </div>
        <nav className="navigation-links">
          <ul>
           <Link to="/about"><li>About</li></Link> 
           <Link to="/piechart"><li>Prices</li></Link>
          <Link to="/videogal"><li>Videos</li></Link>
           <Link to="/story"><li>Stories</li></Link>
           <Link to="/cart"><li>Cart</li></Link> 
            <li>
              {user ? (
                <span>
                  Welcome, {user}! <span></span><span/><span/><span/>
                  <Button variant="contained" color="primary" onClick={handleLogout}>
                     Logout
                  </Button>
                </span>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet context={{ setuser }} /> {/* Pass setUser to nested routes */}
    </div>
  );
};

export default Appbar;
