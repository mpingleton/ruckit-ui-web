import React from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';

import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <LoginForm
        onSubmitLoginCredentials={(credentials) => {}}
        onCancel={() => {
          navigate('/', { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
