
// This reducer manages our folders as maps keyed by their names.
// This helps to improve performance of operations where we retrieve messages for a given folder
import {
    CREATE_NEW_FOLDER,
    DELETE_FOLDER,
    FOLDER_DATA_RESPONSE,
    FOLDERS_RESPONSE,
    SET_SELECTED_FOLDER,
} from '../../actions/folders.actions';
import {SEND_MESSAGE} from "../../actions/messages.actions";

const SYSTEM_FOLDERS = ['Inbox', 'Sent', 'Drafts', 'Spam', 'Trash'];
const INITIAL_STATE = {
    folderMap: {
        'Inbox': [],
        'Sent': [],
        'Drafts': [],
        'Spam': [],
        'Trash': [],
    },
};

const foldersAsMap = (foldersArray = [], initialMap = {}) => foldersArray.reduce((folderMap, folder) => {
    if (folderMap[folder]) {
        return folderMap;
    }
    return {
        ...folderMap,
        [folder]: [],
    };
}, initialMap);

const injectFolderData = (folderMap, payload) => {
    const folderData = folderMap[payload.name] || [];
    const newFolderData = payload.data;

    const existingIds = folderData.map(message => message['message-id']);
    const updatedFolderData = newFolderData.filter(message => !existingIds.includes(message['message-id']));
    return {
        ...folderMap,
        [payload.name]: [
            ...folderData,
            ...updatedFolderData,
        ],
    };
};

const injectMessageIntoFolder = (folderMap, folderName, payload) => ({
    ...folderMap,
    [folderName]: [
        ...folderMap[folderName],
        payload.data,
    ],
});

const addNewFolderEntry = (folderMap, folderName) => {
    if (folderMap[folderName]) {
        return folderMap;
    }

    return {
        ...folderMap,
        [folderName]: [],
    };
}

const deleteFolderEntry = (folderMap, folderName) => {
    if (SYSTEM_FOLDERS.includes(folderName)) {
        return folderMap;
    }

    return {
        ...folderMap,
        [folderName]: undefined,
    };
}

export default function folderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FOLDERS_RESPONSE:
            return {
                ...state,
                folderMap: foldersAsMap(action.payload, state.folderMap),
            };
        case FOLDER_DATA_RESPONSE:
            return {
                ...state,
                folderMap: injectFolderData(state.folderMap, action.payload),
            };
        case SET_SELECTED_FOLDER:
            return {
                ...state,
                selectedFolder: action.payload,
            };
        case CREATE_NEW_FOLDER:
            return {
                ...state,
                folderMap: addNewFolderEntry(state.folderMap, action.payload),
            };
        case DELETE_FOLDER:
            return {
                ...state,
                folderMap: deleteFolderEntry(state.folderMap, action.payload),
            };
        case SEND_MESSAGE:
            return {
                ...state,
                folderMap: injectMessageIntoFolder(state.folderMap, 'Sent', action.payload),
            }
        default:
            return state
    }
}
