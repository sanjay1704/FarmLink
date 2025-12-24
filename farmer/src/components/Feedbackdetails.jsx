import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const FeedbackDetails = () => {
  const [feedbackData, setFeedbackData] = useState(JSON.parse(localStorage.getItem('feedbackData')) || []);

  const handleRemoveFeedback = (index) => {
    const updatedFeedback = feedbackData.filter((_, i) => i !== index);
    setFeedbackData(updatedFeedback);
    localStorage.setItem('feedbackData', JSON.stringify(updatedFeedback));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: "url('https://tracextech.com/wp-content/uploads/2023/06/cover-crops.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          maxWidth: 600,
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Feedback Details
        </Typography>
        {feedbackData.length === 0 ? (
          <Typography variant="body1" align="center">
            No feedback available.
          </Typography>
        ) : (
          feedbackData.map((feedback, index) => (
            <Box key={index} mb={2}>
              <Typography variant="body1" gutterBottom>
                <strong>Name:</strong> {feedback.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Email:</strong> {feedback.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Comments:</strong> {feedback.comments}
              </Typography>
              <Button
                variant="contained"
                style={{ color: 'white', backgroundColor: 'gray' }}
                onClick={() => handleRemoveFeedback(index)}
              >
                Remove
              </Button>
              <hr />
            </Box>
          ))
        )}
      </Paper>
    </Box>
  );
};

export default FeedbackDetails;
