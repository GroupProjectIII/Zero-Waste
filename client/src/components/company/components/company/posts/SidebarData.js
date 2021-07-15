import React from 'react';
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
    {
        title: 'Profile',
        path: '/company/profile',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },

    {
        title: 'Dashboard',
        path: '/company/dashboard',
        icon: <FaIcons.FaTasks />,
        cName: 'nav-text'
    },
    
    {
        title: 'Helpdesk',
        path: '/company/helpdesk',
        icon: <FaIcons.FaQuestion />,
        cName: 'nav-text'
    },
];