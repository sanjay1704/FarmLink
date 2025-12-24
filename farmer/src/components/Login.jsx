// src/components/LoginForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

import { userContext } from "./Context";

const LoginForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setuser] = useContext(userContext);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use GET request with query parameters
      const response = await axios.get(`http://localhost:8080/api/login`, {
        params: {
          email,
          password,
          name, // Include name in the request
        },
      });

      if (response.status === 200) {
        setuser(name);
        alert("Login successful!");
        navigate("/"); // Redirect to the homepage or any other page
      }
    } catch (error) {
      alert(
        error.response?.data ||
          "Invalid email or password. Please sign up first."
      );
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundColor: "#f5e6d3", // Light brown color
        color: "grey",
      }}
    >
      <h2>Already a user? Please Log in</h2>

      <form style={{ width: "300px" }} onSubmit={handleFormSubmit}>
        {/* New Name Field */}
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{ style: { color: "black" } }}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Mail Id"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { color: "black" } }}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>

        <Link to="/sign" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "20px", marginLeft: "10px" }}
          >
            Signup
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default LoginForm;
