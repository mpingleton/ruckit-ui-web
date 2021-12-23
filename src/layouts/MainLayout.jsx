import React from 'react';

import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@mui/material';

// import api.

function MainLayout(props) {

  return (
    <Stack direction="column" spacing={1} sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="stack">
          <Toolbar spacing={1}>
            <Button
              color="inherit"
              onClick={() => {}}
            >
              Calls
            </Button>
            <Typography
              variant="caption"
              sx={{ marginLeft: "auto", marginRight: 1 }}
            >
              SrA First Name
            </Typography>
            <Button
              color="inherit"
              onClick={() => {}}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: '100%', height: '100%' }}>{props.children}</Box>
    </Stack>
  );
}

export default MainLayout;
