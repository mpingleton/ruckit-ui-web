import React from 'react';

import { Box } from '@mui/material';

function BlankLayout(props) {
  return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      {props.children}
    </Box>
  );
}

export default BlankLayout;
