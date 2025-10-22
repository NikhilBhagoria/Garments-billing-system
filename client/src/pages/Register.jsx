import React from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle register logic
  };

  return (
    <Box
      component="form"
      onSubmit={SubmitHandler}
      className="w-1/3 mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white"
    >
      <Stack spacing={3}>
        <TextField
          required
          name="username"
          label="Username"
          variant="outlined"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          required
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="password">Password *</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password *"
          />
        </FormControl>

        <Button type="submit" variant="contained" size="large" fullWidth>
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default Register;
