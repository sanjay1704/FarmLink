import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/about"><h3>About</h3></Link>  
            <p>Learn more about FarmDrop and our mission to connect farmers with consumers.</p>
          </div>
          <div className="footer-section">
          <Link to="/shop">  <h3>Our Markets</h3></Link>
            <p>Explore the various markets we serve and the local producers we partner with.</p>
          </div>
          <div className="footer-section">
           <Link to="/contact"><h3>Contact</h3></Link> 
            <p>Get in touch with us for any inquiries or support.</p>
          </div>
          <div className="footer-section">
           <Link to="/login"><h3>Login</h3></Link> 
            <p>Access your account to manage your orders and preferences.</p>
          </div>
          <div className="footer-section">
            <h3>Share your thoughts </h3>
           <Link to="/feedback"><p>Feedback</p></Link><Link to="/complaint"><p>Complaint form</p></Link> 
          </div>
          <div className="footer-section">
         <Link to="/create"> <h3>Let’s Connect</h3></Link>  
            <p>Follow us on social media to stay updated.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 FarmLink</p>
        </div>

        <style jsx>{`
          .footer {
            background-color: #333; /* Dark background */
            color: white; /* White text */
            padding: 20px;
            text-align: left;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          .footer-section {
            flex: 1;
            min-width: 150px;
            margin: 10px;
          }

          .footer-section h3 {
            margin-bottom: 10px;
          }

          .footer-bottom {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
          }

          /* Ensuring links inherit white color */
          .footer a {
            color: white;
            text-decoration: none;
          }

          /* Optional: Hover effect for links */
          .footer a:hover {
            text-decoration: underline;
          }
        `}</style>
      </footer>
      <Outlet/>
    </div>
  );
};

export default Footer;
