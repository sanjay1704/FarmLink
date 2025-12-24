import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];
    if (!Array.isArray(existingFeedback)) {
      existingFeedback = [];
    }
    const updatedFeedback = [...existingFeedback, formData];
    localStorage.setItem('feedbackData', JSON.stringify(updatedFeedback));
    setSubmitted(true);
  };

  const handleCloseSnackbar = () => {
    setSubmitted(false);
    navigate('/feedbackdetails'); 
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "url('https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg')",
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
          backgroundColor: 'lightblue',
          borderRadius: 2
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Feedback Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Comments"
              name="comments"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.comments}
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
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        action={
          <Button color="inherit" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackForm;
