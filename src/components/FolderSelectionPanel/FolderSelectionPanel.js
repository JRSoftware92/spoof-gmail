import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { getFolders, getFolderData, setSelectedFolder } from "../../actions/folders.actions";

export const FolderItem = ({ folder, isSelected, onFolderSelected }) => (
    <ListItemButton selected={isSelected} onClick={() => onFolderSelected(folder)}>
        <ListItemText primary={folder} />
    </ListItemButton>
)

export const FolderSelectionPanel = ({
    folders = [],
    selectedFolder,
    getFolders,
    getFolderData,
    setSelectedFolder,
}) => {
    const onFolderSelected = (folder) => setSelectedFolder(folder);

    // Retrieve Available Folders for the User
    useEffect(() => {
        getFolders();
    }, []);

    // Retrieve Data for the selected folder
    useEffect(() => {
        if (selectedFolder) {
            getFolderData(selectedFolder);
        }
    }, [selectedFolder]);

    return (
        <List>
            {
                folders.map((folder) => (
                    <FolderItem
                        key={folder}
                        folder={folder}
                        isSelected={selectedFolder === folder}
                        onFolderSelected={onFolderSelected}
                    />
                ))
            }
        </List>
    )
};

export const mapStateToProps = ({ folders }) => {
    const folderNames = Object.keys(folders.folderMap);
    return {
        folders: folderNames,
        selectedFolder: folders.selectedFolder,
    };
}

export const actionCreators = {
    getFolders, getFolderData, setSelectedFolder,
};

export default connect(mapStateToProps, actionCreators)(FolderSelectionPanel);
