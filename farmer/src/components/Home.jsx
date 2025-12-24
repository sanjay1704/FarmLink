import React from 'react';
import './Home.css'; 
import Appbar from './Appbar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Find from './Find';
import Slideshow from './Slideshow';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const farmerLogoUrl = "https://example.com/path/to/your/logo.png"; // Replace with your actual logo URL
  const additionalImageUrl = "https://example.com/path/to/your/image.png"; // Replace with your actual image URL
  const marketImageUrl = "https://farmdrop.us/wp-content/uploads/2021/12/Find-Your-Market-1.jpg";
  const marketImageUrlsell="https://farmdrop.us/wp-content/uploads/2021/12/Sell-On-FarmDrop.jpg";
  const marketImageUrlmarket="https://farmdrop.us/wp-content/uploads/2023/02/Simple-Grape-Photo-Email-Header-Banner-Phone-Wallpaper-533-%C3%97-800-px-2.png";

  return (
    <>
 
    {/* <div>
      <Appbar></Appbar>
      
    </div> */}
      <div className="header-content">
        <Paper style={{ padding: '20px', height: '70vh' }}>
          <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
            <video 
              className="header-video" 
              style={{ width: "100%", height: "100%", objectFit: 'cover' }} 
              autoPlay 
              loop 
              muted
            >
              <source src="https://videos.pexels.com/video-files/4280455/4280455-sd_640_360_30fps.mp4" />
              Your browser does not support the video tag.
            </video>

            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              textAlign: 'center', 
              color: 'white' 
            }}>
              <h1>Discover the Farmer in You!</h1>
              <p>Learn the best practices for growing vegetables and optimizing your yield.</p>
              {/* <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Watch Video
              </Button> */}
            </div>
          </div>
          </Paper>
          <br></br>
          <div>
            <Find></Find>
          </div> 
          { <div>
          <Slideshow></Slideshow>
          </div> }
          {<div>
            <Footer></Footer>
          </div> }

         

          
      </div>
    </>
  );
};

export default Header;
