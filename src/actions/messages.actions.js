export const GET_MESSAGE_DATA = 'GET_MESSAGE_DATA';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPDATE_MESSAGE_DATA = 'UPDATE_MESSAGE_DATA';

// These actions will be used to simulate our API response pipeline
export const MESSAGE_DATA_RESPONSE = 'MESSAGE_DATA_RESPONSE';

export const getMessage = messageId => ({ type: GET_MESSAGE_DATA, payload: messageId });
export const sendMessage = message => ({
    type: SEND_MESSAGE,
    payload: { id: message.id, data: message },
});
export const deleteMessage = messageId => ({ type: DELETE_MESSAGE, payload: messageId });
export const updateMessageData = (messageId, metadata) => ({
    type: UPDATE_MESSAGE_DATA,
    payload: { id: messageId, data: metadata },
});

export const getMessageResponse = (messageId, message) => ({
    type: MESSAGE_DATA_RESPONSE,
    payload: { id: messageId, data: message },
});
