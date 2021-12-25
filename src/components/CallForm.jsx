import React from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  InputLabel,
} from '@mui/material';

import SelectUser from './SelectUser';

const Joi = require('joi');

function CallForm(props) {
  const [pickupLocation, setPickupLocation] = React.useState('');
  const [dropoffLocation, setDropoffLocation] = React.useState('');
  const [mileage, setMileage] = React.useState('');
  const [riderId, setRiderId] = React.useState(0);
  const [driverId, setDriverId] = React.useState(0);

  const pickupLocationValidation = Joi.string().min(3).max(100).required().validate(pickupLocation);
  const dropoffLocationValidation = Joi.string().min(3).max(100).required().validate(dropoffLocation);
  const mileageValidation = Joi.string().required().validate(mileage);
  const riderIdValidation = Joi.number().integer().min(0).required().validate(riderId);
  const driverIdValidation = Joi.number().integer().min(0).required().validate(driverId);
  const errorValidation = (
    pickupLocationValidation.error ||
    dropoffLocationValidation.error ||
    mileageValidation.error ||
    riderIdValidation.error ||
    driverIdValidation.error
  );

  return (
    <Box sx={props.sx}>
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
      >
        <TextField
          fullWidth
          label="Pickup Location"
          value={pickupLocation}
          onChange={(event) => setPickupLocation(event.target.value)}
        />
        <TextField
          fullWidth
          label="Dropoff Location"
          value={dropoffLocation}
          onChange={(event) => setDropoffLocation(event.target.value)}
        />
        <TextField
          fullWidth
          label="Mileage"
          value={mileage}
          onChange={(event) => setMileage(event.target.value)}
        />
        <SelectUser
          title="Rider: "
          selectionMessage="Select a rider..."
          selectedUserId={riderId}
          onSelectionChanged={(id) => setRiderId(id)}
        />
        <SelectUser
          title="Assigned Driver: "
          selectionMessage="Select a driver..."
          selectedUserId={driverId}
          onSelectionChanged={(id) => setDriverId(id)}
        />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          sx={{ width: '100%' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              props.onCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={errorValidation}
            onClick={() => {
              props.onSubmitCall({
                pickupLocation: pickupLocation,
                dropoffLocation: dropoffLocation,
                mileage: mileage,
                riderId: riderId,
                driverId: driverId,
              });
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CallForm;
