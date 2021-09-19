export const GET_USER_FOLDERS = 'GET_USER_FOLDERS';
export const GET_FOLDER_DATA = 'GET_FOLDER_DATA';
export const CREATE_NEW_FOLDER = 'CREATE_NEW_FOLDER';
export const DELETE_FOLDER = 'DELETE_FOLDER';
export const MOVE_MESSAGE_TO_FOLDER = 'MOVE_MESSAGE_TO_FOLDER';

export const SET_SELECTED_FOLDER = 'SET_SELECTED_FOLDER';

// These actions will be used to simulate our API response pipeline
export const FOLDERS_RESPONSE = 'FOLDERS_RESPONSE';
export const FOLDER_DATA_RESPONSE = 'FOLDER_DATA_RESPONSE';

export const getFolders = () => ({ type: GET_USER_FOLDERS });
export const getFolderData = folderName => ({ type: GET_FOLDER_DATA, payload: folderName });
export const createNewFolder = folderName => ({ type: CREATE_NEW_FOLDER, payload: folderName });
export const deleteFolder = folderName => ({ type: DELETE_FOLDER, payload: folderName });
export const moveMessageToFolder = (folderName, messageId) => ({
    type: MOVE_MESSAGE_TO_FOLDER,
    payload: { name: folderName, id: messageId },
});

export const setSelectedFolder = folderName => ({ type: SET_SELECTED_FOLDER, payload: folderName });

export const getFoldersResponse = (folders) => ({
    type: FOLDERS_RESPONSE,
    payload: folders,
});

export const getFolderDataResponse = (folderName, folderData) => ({
    type: FOLDER_DATA_RESPONSE,
    payload: { name: folderName, data: folderData },
});
