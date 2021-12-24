import React from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';

import ConsentBanner from '../components/ConsentBanner';

function Main() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <ConsentBanner
        onContinue={() => {
          navigate('/login');
        }}
      />
    </Stack>
  );
}

export default Main;
