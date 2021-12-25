import React from 'react';
import {
  Stack,
  Button,
} from '@mui/material';

import CallList from '../components/CallList';

function Calls() {
  const [selectedCallId, setSelectedCallId] = React.useState(0);

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
          disabled={selectedCallId <= 0}
          onClick={() => {}}
        >
          Details
        </Button>
      </Stack>
      <CallList
        onSelectionChanged={(id) => setSelectedCallId(id)}
        sx={{ width: '100%', height: '100%' }}
      />
    </Stack>
  );
}

export default Calls;
