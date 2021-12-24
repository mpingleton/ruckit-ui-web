import React from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';

import LoginForm from '../components/LoginForm';

import { login, getApiContext, setAccessToken } from '../api';

function Login() {
  const navigate = useNavigate();

  function submitLogin(credentials) {
    login(getApiContext(), credentials, setAccessToken)
      .then(() => {
        navigate('/calls');
      });
  }

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <LoginForm
        onSubmitLoginCredentials={(credentials) => submitLogin(credentials)}
        onCancel={() => {
          navigate('/', { replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
