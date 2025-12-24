import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
const images = [
  "https://c4.wallpaperflare.com/wallpaper/220/287/656/field-sunset-macro-wheat-wallpaper-preview.jpg",
  "https://media.istockphoto.com/id/153737841/photo/rice.jpg?b=1&s=612x612&w=0&k=20&c=OiBx6RbgtHr7by4gcILMoTveSLnVVR7FwHItIz1brtY=",
  "https://c4.wallpaperflare.com/wallpaper/1016/29/154/fresh-fruit-hd-wallpaper-preview.jpg",
  "https://img.freepik.com/free-photo/deserted-landscape-dry-land_23-2151850336.jpg?semt=ais_hybrid"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <>
    <Container>
    <div className="slideshow-container">
    
      <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
      
      {/* Center Content */}
      <div className="center-content">
        <h2>
        WE ARE MAKING A DIRECT CONNECT TO</h2>
        <p>YOUR FARMERS AND MAKERS.</p>
       <Link to="/contact"> <button className="contact-button">Contact Us</button></Link>
      </div>

      <div className="slideshow-indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .slideshow-container {
          position: relative;
          max-width: 100%;
          margin: auto;
          overflow: hidden;
        }

        .slideshow-image {
          width: 100%;
          height: 700px;
        }

        .center-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white; /* Change text color if needed */
        }

        .contact-button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: blue; /* Button background color */
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .contact-button:hover {
          background-color: darkblue; /* Button hover color */
        }

        .slideshow-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .indicator {
          display: inline-block;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: white;
          cursor: pointer;
        }

        .indicator.active {
          background-color: blue; /* Active indicator color */
        }
      `}</style>
    </div>
    </Container>
    </>
  );
};

export default Slideshow;
