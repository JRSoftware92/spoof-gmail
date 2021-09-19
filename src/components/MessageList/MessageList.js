import React, { useState } from 'react';
import { connect } from 'react-redux';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { getMessage } from "../../actions/messages.actions";

import MessageView from "../MessageView/MessageView";

const MessageItem = ({ message, onMessageSelected }) => {
    const messageText = `${message.from}: ${message.subject}`;
    return (
        <ListItemButton onClick={() => onMessageSelected(message)}>
            <ListItemText primary={messageText} />
        </ListItemButton>
    )
};

export const MessageList = ({ messages = [], getMessage }) => {
    const [messageToDisplay, showMessage] = useState(false);
    const onMessageSelected = (message) => {
        const messageId = message['message-id'];
        getMessage(messageId);
        showMessage(messageId);
    };
    return (
        <div>
            <Modal open={!!messageToDisplay} onClose={() => showMessage(false)}>
                <MessageView messageId={messageToDisplay} />
            </Modal>
            {
                !messages.length && (
                    <Typography variant="body1" sx={{ m: 4 }}>
                        You don't seem to have any messages in this folder.
                    </Typography>
                )
            }
            <List>
                {
                    messages.map((message) => (
                        <MessageItem
                            key={message['message-id']}
                            message={message}
                            onMessageSelected={onMessageSelected}
                        />
                    ))
                }
            </List>
        </div>
    )
}

export const mapStateToProps = ({ folders: { folderMap, selectedFolder } }) => {
    const messages = selectedFolder ? folderMap[selectedFolder] : [];
    return { messages };
};

export const actionCreators = {
    getMessage,
};

export default connect(mapStateToProps, actionCreators)(MessageList);
