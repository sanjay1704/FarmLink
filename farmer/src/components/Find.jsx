import React from 'react';
import './Home.css'; 
import Appbar from './Appbar';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Outlet,Link } from 'react-router-dom';

const Find = () => {

  const marketImageUrl = "https://farmdrop.us/wp-content/uploads/2021/12/Find-Your-Market-1.jpg";
  const marketImageUrlsell="https://farmdrop.us/wp-content/uploads/2021/12/Sell-On-FarmDrop.jpg";
  const marketImageUrlmarket="https://farmdrop.us/wp-content/uploads/2023/02/Simple-Grape-Photo-Email-Header-Banner-Phone-Wallpaper-533-%C3%97-800-px-2.png";

  return (
    <>
      
         

          {/* Flexbox for Image and Content Below the Video */}
          <div style={{ display: 'flex', marginTop: '20px' }}>
            {/* Left Image Section */}
            <div style={{ width: '50%', padding: '20px', textAlign: 'center' }}>
              <img 
                src={marketImageUrl} 
                alt="Find Your Market" 
                style={{ width: '60%', height: '600px', borderRadius: '8px' }} // Adjusted size
              />
            </div>

            {/* Right Content Section */}
            <div style={{ width: '50%', padding: '20px', color: 'black', lineHeight: '1.6' }}> {/* Set color to full dark */}
              <h2 style={{ fontWeight: 300,fontSize:"40px", color: 'black' }}>Find Your Market</h2> {/* Set heading color */}
              <p style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}> {/* Set paragraph color */}
                We’re making it easier to choose the great food being produced in our very own foodsheds. By shopping on FarmDrop you:
              </p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Get the freshest, most nutritious local foods available year-round</li> {/* Set list item color */}
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Support the interests of small-scale food producers in your community</li>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Help preserve the sustainable stewardship of our rural landscapes</li>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Sustain local jobs and businesses</li>
              </ul>
              <p style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>
                FarmDrop increases community access to locally made and grown products through this restructured food system, which in turn, serves our planet and our place-based sense of self and sovereignty. We’re excited for you to join our mission and put your money where your heart is!
              </p>
              <Button variant='outlined' style={{height:'50px', width:'150px',background:"green",color:"white"}}>
               <Link to="/shop"> <h>Find your market</h></Link>
              </Button>
            </div>
          </div>
          <br></br>

          {/* <div style={{ display: 'flex', marginTop: '20px' }}>
            
            <div style={{ width: '50%', padding: '20px', color: 'black', lineHeight: '1.6' }}> 
              <h2 style={{ fontWeight: 300,fontSize:"40px", color: 'black' }}>Sell on FarmDrop</h2>
              <p style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}> 
              FarmDrop is a collaborative marketplace hosting multiple farmers and<br></br>
              producers together on a local online storefront. Here’s how it works:              </p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Shoppers order from your availability each week and pay in advance.</li> <br/>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>A dedicated Market Hub Manager receives your weekly<br/> bulk harvest deliveries and parcels out customer orders.</li><br/>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Customers pickup their orders at a designated pickup location</li><br/>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Sustain local jobs and businesses</li>
              </ul>
              <p style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>
              This prepaid, harvest-to-order model reduces waste by ensuring your <br/>customers get your freshest goods while you make efficient use of your labor, product, and time.
              </p>
              <Button variant='outlined' style={{height:'50px', width:'150px',background:"green",color:"white"}}>
               <h>GET STARTED</h>
              </Button>
            </div>
            <div style={{ width: '50%', padding: '20px', textAlign: 'center' }}>
              <img 
                src={marketImageUrlsell} 
                alt="Find Your Market" 
                style={{ width: '60%', height: '700px', borderRadius: '8px' }} 
              />
            </div>

            
          </div>
          <br></br> */}
          <div style={{ display: 'flex', marginTop: '20px' }}>
            {/* Left Image Section */}
            <div style={{ width: '50%', padding: '20px', textAlign: 'center' }}>
              <img 
                src={marketImageUrlmarket} 
                alt="Find Your Market" 
                style={{ width: '60%', height: '600px', borderRadius: '8px' }} // Adjusted size
              />
            </div>

            {/* Right Content Section */}
            <div style={{ width: '50%', padding: '20px', color: 'black', lineHeight: '1.6' }}> {/* Set color to full dark */}
              <h2 style={{ fontWeight: 300,fontSize:"40px", color: 'black' }}>Create Your Market</h2> {/* Set heading color */}
              <p style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}> {/* Set paragraph color */}
              Earn income by supporting your local economy!<br/> If you are interested in becoming a FarmDrop Market Hub Manager for your community, <br/>or are already in talks with local producers about creating a shared marketing and distribution platform, you’ve come to the right place! It takes about 3 weeks to launch a new market. Find out more.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Bring your local producers together in a<br></br> shared marketplace where they set prices & keep 95% of their sales fee.</li> {/* Set list item color */}<br/>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>Earn income by bolstering your local economy!<br/> Market Hub Managers receive a small fee,<br/> paid by the customer at checkout, for fulfilling each order.</li><br></br>
                <li style={{ fontWeight: 300, fontSize: '25px', color: 'black' }}>FarmDrop provides the tools & training to bring<br/> producers onboard and help their stores thrive.</li><br></br>
                
              </ul>
              
              <Button variant='outlined' style={{height:'50px', width:'150px',background:"green",color:"white"}}>
               <Link to="/create"> <h>Get Started</h></Link>
              </Button>
            </div>
          </div>
          <br></br>
    
    </>
  );
};

export default Find;
