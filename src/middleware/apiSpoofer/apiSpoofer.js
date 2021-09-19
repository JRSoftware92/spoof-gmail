import {
    GET_MESSAGE_DATA,
    getMessageResponse
} from '../../actions/messages.actions';
import {
    GET_USER_FOLDERS,
    GET_FOLDER_DATA,
    getFoldersResponse,
    getFolderDataResponse
} from '../../actions/folders.actions';

import inboxData from '../../data/folders/inbox.json';
import trashData from '../../data/folders/trash.json';

import folderData from '../../data/folders.json';

// Ordered by how they appear in my IDE
import firstMessage from '../../data/messages/098ddd.json';
import secondMessage from '../../data/messages/123abc.json';
import thirdMessage from '../../data/messages/456def.json';
import fourthMessage from '../../data/messages/789aaa.json';
import fifthMessage from '../../data/messages/999999.json';
import sixthMessage from '../../data/messages/88888888.json';

// Used to create an id based reference for the 'messages' folder
// Could have used file system parsing for this, but chose not to, as a
// reduce function came to mind first.
const getMessageMap = () => {
    const messages = [
        firstMessage, secondMessage, thirdMessage, fourthMessage, fifthMessage, sixthMessage
    ];

    return messages.reduce((messageMap, message) => ({
        ...messageMap,
        [message.id]: message,
    }), {});
};

const retrieveMessageData = (messageId) => {
    const messageMap = getMessageMap();
    return messageMap[messageId];
}

// Result of this will be merged into any messages created by the user in the reducer
const retrieveFolderMessages = (folderName) => {
    if (folderName === 'Inbox') {
        return inboxData;
    }
    if (folderName === 'Trash') {
        return trashData;
    }
    return [];
};

const spoofGETRequest = (dispatch, action) => {
    switch(action.type) {
        case GET_MESSAGE_DATA:
            const messageData = retrieveMessageData(action.payload);
            if (messageData) {
                dispatch(getMessageResponse(
                    action.payload,
                    messageData,
                ));
            }
            return;
        case GET_USER_FOLDERS:
            dispatch(getFoldersResponse(folderData));
            return;
        case GET_FOLDER_DATA:
            dispatch(getFolderDataResponse(
                action.payload,
                retrieveFolderMessages(action.payload),
            ));
            return;
        default:
            return;
    }
}

const GET_REQUEST_TYPES = [GET_MESSAGE_DATA, GET_USER_FOLDERS, GET_FOLDER_DATA];
export const apiSpoofer = store => next => action => {
    if (GET_REQUEST_TYPES.includes(action.type)) {
        spoofGETRequest(store.dispatch, action);
    }
    next(action);
};

export default apiSpoofer;
