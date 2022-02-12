import React from 'react';
import { useNavigate } from 'react-router';
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@mui/material';

import { getApiContext, getMe, logout, deleteAccessToken } from '../api';

function MainLayout(props) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getMe(getApiContext()).then((data) => setUser(data));
  }, []);

  function submitLogout() {
    logout(getApiContext()).then(() => {
      deleteAccessToken();
      navigate('/', { replace: true });
    });
  }

  if (user.id === undefined) {
    return (
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100vw', height: '100vh' }}
      >
        <Typography>Loading...</Typography>
      </Stack>
    );
  }

  return (
    <Stack direction="column" spacing={1} sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar spacing={1}>
            <Button
              color="inherit"
              onClick={() => {
              	navigate('/calls');
              }}
            >
              Calls
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate('/messages');
              }}
            >
              Messages
            </Button>
            <Typography variant="h6" sx={{ marginLeft: "auto", marginRight: "auto", align: "center" }}>
              {props.title}
            </Typography>
            <Typography sx={{ marginLeft: "auto", marginRight: 1 }}>
              {`
                ${user.rank}
                ${user.firstName}
                ${user.lastName}
              `}
            </Typography>
            <Button
              color="inherit"
              onClick={() => submitLogout()}
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
