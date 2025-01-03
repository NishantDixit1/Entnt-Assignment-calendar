// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  useTheme
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  EmailOutlined,
  LockOutlined,
  DarkMode,
  LightMode
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../context/ThemeContext';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colorMode = useThemeContext();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Hardcoded credentials for admin login
    const fixedAdminCredentials = {
      email: "admin@gmail.com",
      password: "Admin@123",
    };

    // Check if the entered credentials match the hardcoded ones
    if (
      formData.email === fixedAdminCredentials.email &&
      formData.password === fixedAdminCredentials.password
    ) {
      // Simulate storing token and role in localStorage
      localStorage.setItem('token', 'fixedAdminToken');
      localStorage.setItem('role', 'admin');

      console.log('Login successful with fixed credentials.');

      // Navigate to admin dashboard
      navigate("/admin-dashboard");
      return;
    }

    // If the credentials don't match, show an error
    alert('Invalid email or password. Please try again.');
  };

  const handleUserLogin = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: '100%',
          maxWidth: 450,
          p: 4,
          borderRadius: 3,
          bgcolor: 'background.paper',
          position: 'relative'
        }}
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>

        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 1
            }}
          >
            Admin Portal
          </Typography>
          <Typography color="text.secondary">
            Secure Access for Administrators
          </Typography>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleInputChange}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{ mb: 3 }}
        >
          Login
        </Button>

        <Box textAlign="center">
          <Button
            onClick={handleUserLogin}
            sx={{ textTransform: 'none' }}
          >
            Switch to User Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
