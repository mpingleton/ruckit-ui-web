import React from 'react';
import { useNavigate } from 'react-router';
import {
  Stack,
} from '@mui/material';

function Messages() {
	const navigate = useNavigate();

	return (
		<Stack
			direction="column"
      alignItems="center"
      sx={{ width: '100%', height: '100%' }}
		>
			<Stack
        direction="row"
        spacing={1}
        sx={{ width: '100%' }}
      >
      		
      </Stack>
      		
		</Stack>
	);
}

export default Messages;