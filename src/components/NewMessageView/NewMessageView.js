import React, { useState } from 'react';
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

import { sendMessage } from "../../actions/messages.actions";

const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    border: '1px solid black',
    width: '512px',
    padding: '16px',
};

const getRandomNumber = () => Math.floor(Math.random() * (10000000));

export const NewMessageView = ({ onClose, sendMessage }) => {
    const [emailTarget, setEmailTarget] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onSendClicked = () => {
        if (!subject || !body || !emailTarget) {
            console.error('One of the required fields has not been filled in.');
            return;
        }

        const id = `x-${getRandomNumber()}`;
        const newMessage = {
            id,
            'message-id': id,
            from: 'Coding Test User <foo.bar@example.com>', // Hardcoded until further notice
            to: emailTarget,
            date: Date.now(),
            subject,
            body,
        };

        sendMessage(newMessage);
        onClose();
    };
    return (
        <Box style={containerStyle}>
            <TextField
                id="to"
                type="text"
                label="To"
                variant="standard"
                margin="normal"
                fullWidth
                value={emailTarget}
                onChange={ (e) => setEmailTarget(e.target.value) }
            />
            <TextField
                id="subject"
                type="text"
                label="Subject"
                variant="standard"
                margin="normal"
                sx={{ mb: 4 }}
                fullWidth
                value={subject}
                onChange={ (e) => setSubject(e.target.value) }
            />
            <TextField
                id="body"
                type="text"
                label="Body"
                variant="outlined"
                fullWidth
                multiline
                rows={16}
                value={body}
                onChange={ (e) => setBody(e.target.value) }
            />
            <ButtonGroup>
                <Button variant="primary" onClick={onSendClicked}>Send</Button>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
            </ButtonGroup>
        </Box>
    )
};

const actionCreators = {
    sendMessage,
};

export default connect(null, actionCreators)(NewMessageView);