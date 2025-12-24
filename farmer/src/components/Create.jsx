import React, { useState } from 'react';
import axios from 'axios';
// Sample background image URL
const backgroundImageUrl = 'https://img.freepik.com/free-photo/green-leaves_53876-108331.jpg'; // Replace with your preferred image URL

const FarmDropHubManager = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    interested: '',
    hubLocation: '',
    isProducer: '',
    questions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = () => {
  //   // Handle data submission, e.g., send data to a server
  //   console.log('Data submitted:', formData);
  //   alert('Data submitted successfully!'); // Alert for demonstration
  // };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/managers/submit', formData);
      console.log('Data submitted:', response.data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data. Please try again.');
    }
  };

  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImageUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'flex-start', 
      padding: '50px',
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Left Side: Form Details */}
        <div style={{ 
          padding: '20px', 
          borderRadius: '0px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '60%', 
        }}>
          <h2 style={{ textAlign: 'center' }}>FarmLink Hub Manager Application</h2>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Phone:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Are you interested in becoming a FarmLink Market Hub Manager?
              <select name="interested" value={formData.interested} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Where would you like to start a new FarmLink Hub?
              <input type="text" name="hubLocation" value={formData.hubLocation} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Are you currently a producer of a product you would like to sell on FarmLink.us?
              <select name="isProducer" value={formData.isProducer} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
          <div style={{ margin: '10px 0' }}>
            <label style={{ display: 'block' }}>
              Any questions?
              <textarea name="questions" value={formData.questions} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </label>
          </div>
          <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px', width: '100%' }}>Send</button>
        </div>

        {/* Right Side: Additional Information */}
        <div style={{ 
          padding: '20px', 
          borderRadius: '0px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '40%', 
          fontSize: '14px', // Adjusted font size
          lineHeight: '1.5', // Improved line height for readability
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '40px' }}>Join the FarmLink Community</h2> {/* Adjusted header font size */}
          <p style={{ margin: '10px 0',fontSize:'20px' }}>
            Bring your local producers together in a shared marketplace where they set prices & keep 95% of their sales fee.
          </p>
          <p style={{ margin: '10px 0',fontSize:'20px' }}>
            Earn income by bolstering your local economy! Market Hub Managers receive a small fee, paid by the customer at checkout, for fulfilling each order.
          </p>
          <p style={{ margin: '10px 0',fontSize:'20px' }}>
            FarmLink provides the tools & training to bring producers onboard and help their stores thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmDropHubManager;
