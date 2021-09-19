import React from 'react';

import SidePanel from '../SidePanel/SidePanel';
import MessageList from '../MessageList/MessageList';

import './MailDashboard.css';

export const MailDashboard = () => {
    return (
        <div className="mail-dashboard">
            <SidePanel />
            <MessageList />
        </div>
    );
};

export default MailDashboard;
