import React from 'react';
import { useNavigate } from 'react-router';
import {
  Stack,
} from '@mui/material';

import MessageList from '../components/MessageList';

function Messages() {
	const navigate = useNavigate();
  const [selectedMessageId, setSelectedMessageId] = React.useState(0);

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
      <MessageList
        onSelectionChanged={(id) => setSelectedMessageId(id)}
        sx={{ width: '100%', height: '100%' }}
      />
		</Stack>
	);
}

export default Messages;