import React from 'react';
import {
  Stack,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

function CallDetailsCard(props) {
  if (props.callData === null) {
    return (
      <Card>
        <CardContent>
          <Stack
            direction="column"
            spacing={1}
            sx={props.sx}
          >
            <Typography>Loading...</Typography>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={props.sx}>
      <CardContent>
        <Stack
          direction="column"
          spacing={1}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
          >
            <Typography>Pickup Location:</Typography>
            <Typography>{props.callData.pickupLocation}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
          >
            <Typography>Dropoff Location:</Typography>
            <Typography>{props.callData.dropoffLocation}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
          >
            <Typography>Driver:</Typography>
            <Typography>
              {`${props.callData.driverObject.rank} ${props.callData.driverObject.firstName} ${props.callData.driverObject.lastName}`}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
          >
            <Typography>Rider:</Typography>
            <Typography>
              {`${props.callData.riderObject.rank} ${props.callData.riderObject.firstName} ${props.callData.riderObject.lastName}`}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CallDetailsCard;