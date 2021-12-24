import React from 'react';
import { Stack } from '@mui/material';

import ConsentBanner from '../components/ConsentBanner';

function Main() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: '100%', height: '100%' }}
    >
      <ConsentBanner />
    </Stack>
  );
}

export default Main;
