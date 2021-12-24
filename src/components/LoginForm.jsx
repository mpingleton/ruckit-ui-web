import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function LoginForm(props) {

  return (
    <Box sx={{ width: 400 }}>
      <Card>
        <CardContent>
          <Stack
            direction="column"
            spacing={1}
            alignItems="center"
          >
            <Typography variant="h6">Login</Typography>
            <TextField
              fullWidth
              label="Username"
              value=""
              error={false}
              onChange={(event) => {}}
            />
            <TextField
              fullWidth
              label="Password"
              value=""
              error={false}
              onChange={(event) => {}}
            />
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              sx={{ width: '100%' }}
            >
              <Button
                variant="contained"
                onClick={() => {}}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {}}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
