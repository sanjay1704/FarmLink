import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const ComplaintForm = () => {
  const [complaintData, setComplaintData] = useState({
    name: '',
    email: '',
    complaint: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setComplaintData({
      ...complaintData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_hbcxbro',    
      'template_so8rf6g',   
      {
        name: complaintData.name,
        email: complaintData.email,
        complaint: complaintData.complaint,
        to_email: 'sanjaysiva1704@gmail.com' 
      },
      'dZrO4E5x0C9h_hxH9'     
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setComplaintData({
        name: '',
        email: '',
        complaint: '',
      });
    }).catch((err) => {
      console.error('FAILED...', err);
      setError(true);
    });
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
    setError(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "url('https://images.pexels.com/photos/164250/pexels-photo-164250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: 3
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          maxWidth: 600,
          width: '100%',
          backgroundColor:'whitesmoke',
          borderRadius: 2
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Complaint Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={complaintData.name}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={complaintData.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Complaint"
              name="complaint"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={complaintData.complaint}
              onChange={handleChange}
              required
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        action={
          <Button color="inherit" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Complaint submitted successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        action={
          <Button color="inherit" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Failed to submit complaint!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ComplaintForm;
