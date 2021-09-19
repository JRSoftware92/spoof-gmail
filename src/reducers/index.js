import { combineReducers } from 'redux'

import folderReducer from './folders/folders.reducer';
import messageReducer from './messages/messages.reducer';

export default combineReducers({
    folders: folderReducer,
    messages: messageReducer
});
