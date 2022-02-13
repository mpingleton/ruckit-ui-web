
const sendMessage = async (
    apiContext,
    callId,
    recipientId,
    text,
) => {
    const res = await fetch(apiContext.apiAddr + '/api/message', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            callId: callId,
            recipientId: recipientId,
            text: text,
        }),
    });
};

const getMessagesInCall = async (apiContext, callId) => {
    const res = await fetch(apiContext.apiAddr + '/api/message/in/call/' + callId, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiContext.accessToken}`,
        },
    }).then((data) => data.json());

    return res;
};

module.exports = {
    sendMessage,
    getMessagesInCall,
};