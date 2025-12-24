// src/components/Signup.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (createPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!role) {
      alert("Please select a role!");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      password: createPassword,
      role,
    };

    try {
      await axios.post("http://localhost:8080/api/signup", userData);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5e6d3"
      color="black"
    >
      <h2>Sign Up Form</h2>
      <form style={{ width: "300px" }} onSubmit={handleFormSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />
        <TextField
          label="Mail Id"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />
        <TextField
          label="Create Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{ style: { color: "black" } }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="role-select-label">Select Role</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={role}
            label="Role"
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="Farmer">Farmer</MenuItem>
            <MenuItem value="Customer">Customer</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
