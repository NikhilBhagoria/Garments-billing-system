import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';


const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const LoginHandler = (e) => {
    e.preventDefault();
    console.log('Logging in with', credentials);
    // Add your login logic here
  }
  return (
    <Box
      component="form"
      onSubmit={LoginHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        margin: 'auto',
        mt: 5,
        p: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        fullWidth
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </Box>
  );
};

export default Login