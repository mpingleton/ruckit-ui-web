import React from 'react';
import {
  Stack,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

import {
  getApiContext,
  getUsersInMyBase,
} from '../api';

function SelectUser(props) {
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    if (props.filterType === 'BASE' || props.filterType === undefined) {
      getUsersInMyBase(getApiContext()).then((data) => setUserList(data));
    }
  }, [props.filterType]);

  function handleChange(event) {
    if (props.onSelectionChanged !== undefined) {
      props.onSelectionChanged(event.target.value);
    }
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Typography sx={{ width: '30%' }}>{props.title}</Typography>
      <Select
        fullWidth
        value={props.selectedUserId}
        onChange={handleChange}
      >
        <MenuItem value={0} disabled><em>{props.selectionMessage}</em></MenuItem>
        {userList.map((user) => (<MenuItem value={user.id}>{`${user.rank} ${user.firstName} ${user.lastName}`}</MenuItem>))}
      </Select>
    </Stack>
  );
}

export default SelectUser;
