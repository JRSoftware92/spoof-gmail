import React from 'react';
import { connect } from 'react-redux';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    border: '1px solid black',
    height: '512px',
    padding: '16px',
};

export const MessageView = ({ message }) => {
    if (!message) {
        return (
            <Box style={containerStyle}>
                <Typography variant="body1" component="div">
                    Something has gone wrong - No message data appears to be available.
                </Typography>
            </Box>
        )
    }
    return (
        <Box style={containerStyle}>
            <Typography variant="h3" component="div">
                { message.subject }
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                { message.date }
            </Typography>
            <Typography variant="subtitle1" component="div">
                From: { message.from }
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div" sx={{ mb: 4 }}>
                to: { message.to }
            </Typography>
            <Typography variant="body1" component="div">
                { message.body }
            </Typography>
        </Box>
    )
}

export const mapStateToProps = ({ messages: { messageMap } }, { messageId }) => ({
    message: messageId ? messageMap[messageId] : undefined,
});

export default connect(mapStateToProps)(MessageView);
