import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from '@mui/material';

const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate nibh sit amet libero luctus, sed vehicula sapien dictum. Donec diam enim, ornare eu est placerat, bibendum auctor risus. Proin at vehicula metus. Etiam eget magna imperdiet, mattis nulla et, sollicitudin nibh. Proin lectus mi, tristique sed accumsan a, facilisis quis tellus. Vivamus sodales sodales neque ut dapibus. Curabitur tristique lobortis dui, sed pulvinar justo tempus nec. Nam fringilla diam id volutpat rutrum. Nullam eget risus convallis, dignissim erat id, dapibus odio.";

function ConsentBanner(props) {

  return (
    <Box sx={{ width: 400 }}>
      <Card>
        <CardContent>
          <Stack
            direction="column"
            spacing={1}
            alignItems="center"
          >
            <Typography variant="h6">Warning and Consent Banner</Typography>
            <Typography>{message}</Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {}}
            >
              Continue
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ConsentBanner;
