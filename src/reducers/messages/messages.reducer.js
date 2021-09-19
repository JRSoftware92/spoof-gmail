
// This reducer manages our messages as a map keyed by their IDs
// This helps to improve performance of operations where we retrieve messages for a given folder
import { MESSAGE_DATA_RESPONSE, SEND_MESSAGE } from '../../actions/messages.actions';

const INITIAL_STATE = {
    messageMap: {},
};

const injectMessageData = (messageMap, payload) => ({
    ...messageMap,
    [payload.id]: payload.data,
})

export default function messageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEND_MESSAGE:
        case MESSAGE_DATA_RESPONSE:
            return {
                ...state,
                messageMap: injectMessageData(state.messageMap, action.payload),
            };
        default:
            return state
    }
}
