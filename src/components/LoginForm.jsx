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

const Joi = require('joi');

function LoginForm(props) {
  const [username, setUsername] = React.useState('');
  const [passphrase, setPassphrase] = React.useState('');

  const usernameValidation = Joi.string().min(3).max(100).required().validate(username);
  const passphraseValidation = Joi.string().min(3).max(100).required().validate(passphrase);
  const errorValidation = (
    usernameValidation.error ||
    passphraseValidation.error
  );

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
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              fullWidth
              label="Passphrase"
              value={passphrase}
              onChange={(event) => setPassphrase(event.target.value)}
            />
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              sx={{ width: '100%' }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  props.onCancel();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={errorValidation}
                onClick={() => {
                  props.onSubmitLoginCredentials({
                    username: username,
                    passphrase: passphrase,
                  });
                }}
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
