import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Here you would call your authentication API
      console.log("Login attempt with:", credentials);

      // Simulate successful login (replace with actual auth logic)
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={credentials.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="register-prompt">
          Don't have an account? <a href="/register">Register now</a>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 20px;
        }

        .login-form {
          width: 100%;
          max-width: 400px;
          padding: 30px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 24px;
          color: #2c3e50;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #34495e;
        }

        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          color: #2c3e50;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          align-items: center;
        }

        .remember-me {
          display: flex;
          align-items: center;
        }

        .remember-me label {
          margin-left: 8px;
          margin-bottom: 0;
          color: #34495e;
        }

        .login-button {
          width: 100%;
          padding: 12px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .login-button:hover {
          background-color: #45a049;
        }

        .error-message {
          color: #d32f2f;
          text-align: center;
          margin-bottom: 20px;
          padding: 10px;
          background-color: #fdecea;
          border-radius: 4px;
        }

        .register-prompt {
          text-align: center;
          margin-top: 20px;
          color: #34495e;
        }

        a {
          color: #3498db;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
          color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
