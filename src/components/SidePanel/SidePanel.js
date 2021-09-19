import React, { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Modal from '@mui/material/Modal';

import FolderSelectionPanel from '../FolderSelectionPanel/FolderSelectionPanel';
import NewMessageView from "../NewMessageView/NewMessageView";

import './SidePanel.css';

export const SidePanel = () => {
    const [isWritingMessage, showNewMessageModal] = useState(false);
    const closeModal = () => showNewMessageModal(false);
    return (
        <div className="side-panel">
            <Modal open={isWritingMessage} onClose={closeModal}>
                <NewMessageView onClose={closeModal}/>
            </Modal>
            <List style={{ width: '320px' }}>
                <ListItemButton divider onClick={() => showNewMessageModal(true)}>
                    <ListItemText>Compose</ListItemText>
                </ListItemButton>
                <FolderSelectionPanel />
            </List>
        </div>
    )
}

export default SidePanel;
