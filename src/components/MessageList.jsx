import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { getApiContext, getMessagesInCall } from '../api';

function MessageList(props) {
    const [messageList, setMessageList] = React.useState([]);

    React.useEffect(() => {
        getMessagesInCall(getApiContext(), 1).then((data) => setMessageList(data));
    }, []);

    const columns = [
        { field: 'recipient', headerName: 'Recipient', width: 200 },
        { field: 'sender', headerName: 'Sender', width: 200 },
        { field: 'text', headerName: 'Message', width: 500 },
    ];

    const rows = messageList.map((message) => ({
        id: message.id,
        recipient: message.recipientId,
        sender: message.senderId,
        text: message.text,
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

export default MessageList;