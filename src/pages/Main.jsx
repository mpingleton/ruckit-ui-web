import React from 'react';
import {
  Stack,
  Typography,
} from '@mui/material';

function Main() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <Typography variant="h6">Main Page</Typography>
    </Stack>
  );
}

export default Main;
