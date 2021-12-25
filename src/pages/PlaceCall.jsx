import React from 'react';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';

import CallForm from '../components/CallForm';

import {
  getApiContext,
  placeCall,
} from '../api';

function PlaceCall() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <CallForm
        onCancel={() => {
          navigate('/calls', { replace: true });
        }}
        onSubmitCall={(callDetails) => {
          placeCall(getApiContext(), callDetails)
            .then(() => { navigate('/calls', { replace: true }); });
        }}
        sx={{ width: '40%' }}
      />
    </Stack>
  );
}

export default PlaceCall;
