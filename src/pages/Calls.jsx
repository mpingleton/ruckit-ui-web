import React from 'react';
import {
  Stack,
  Button,
} from '@mui/material';

import CallList from '../components/CallList';

function Calls() {

  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: '100%' }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          New
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          Details
        </Button>
      </Stack>
      <CallList
        sx={{ width: '100%', height: '100%' }}
      />
    </Stack>
  );
}

export default Calls;
