import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for contacting us! A team member will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        }); // Reset form data
      } else {
        alert('There was an error submitting your contact request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your contact request. Please try again.');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundImage: 'url("https://img.freepik.com/free-photo/green-leaves_53876-108331.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}>
      <div style={{ 
        maxWidth: '800px',
        width: '100%', 
        padding: '20px', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        marginLeft: '5%', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px' 
      }}>
        <h2>Contact Us</h2>
        <p>Please fill out the form below and a team member will get back to you as soon as possible.</p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>
              Phone:
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>
              Subject:
              <select 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              >
                <option value="">Select a Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Wholesaler">Wholesaler</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                style={{ width: '100%', padding: '8px', marginTop: '5px' }} 
              />
            </label>
          </div>
          
          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer' 
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
