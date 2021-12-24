import React from 'react';
import {
  Box,
  Stack,
} from '@mui/material';

import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <LoginForm />
    </Stack>
  );
}

export default Login;
