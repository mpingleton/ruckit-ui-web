import React from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  Stack,
} from '@mui/material';

import CallDetailsCard from '../components/CallDetailsCard';

import { getApiContext, getCallById } from '../api';

function CallDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [callData, setCallData] = React.useState(null);

  React.useEffect(() => {
    getCallById(getApiContext(), params.callId).then((data) => setCallData(data));
  }, []);

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <CallDetailsCard
        callData={callData}
        sx={{ width: '40%' }}
      />
    </Stack>
  );
}

export default CallDetails;