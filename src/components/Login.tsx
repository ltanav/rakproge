import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import React from 'react';

interface LoginProps {
  // Add any props you need to pass to the Login component
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Please enter a username and password');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        // If authentication is successful, redirect to the dashboard or whatever
        // ...
        console.log('Login successful!');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError("An error occurred while authenticating");
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
        />
      </Grid>
      {error && (
        <Grid item xs={12}>
          <Typography variant="body1" component="p" style={{ color: 'red' }}>
            {error}
          </Typography>
        </Grid>
      )}
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;