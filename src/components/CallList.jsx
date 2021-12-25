import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { getApiContext, getCalls } from '../api';

function CallList(props) {
  const [callList, setCallList] = React.useState([]);

  React.useEffect(() => {
    getCalls(getApiContext(), 0).then((data) => setCallList(data));
  }, []);

  const columns = [
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'rider', headerName: 'Rider', width: 200 },
    { field: 'driver', headerName: 'Assigned Driver', width: 200 },
    { field: 'pickup', headerName: 'Pickup Location', width: 200 },
    { field: 'dropoff', headerName: 'Dropoff Location', width: 200 },
  ];

  const rows = callList.map((call) => ({
    id: call.id,
    status: call.status,
    rider: call.riderId,
    driver: call.driverId,
    pickup: call.pickupLocation,
    dropoff: call.dropoffLocation,
  }));

  return (
    <Box sx={props.sx}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableMultipleSelection
      />
    </Box>
  );
}

export default CallList;
