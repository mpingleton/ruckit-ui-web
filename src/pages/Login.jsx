import React from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

function Login() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <Typography variant="h6">Login</Typography>
    </Stack>
  );
}

export default Login;
