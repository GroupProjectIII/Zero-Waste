import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'View Posts',
        path: '/buyer/posts',
        icon: <FaIcons.FaAdversal />,
        cName: 'nav-text'
    },
    {
        title: 'Accepted Offers',
        path: '/buyer/acceptedoffers',
        icon: <MdIcons.MdLocalOffer />,
        cName: 'nav-text'
    },
    {
        title: 'Pending Offers',
        path: '/buyer/pendingoffers',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
];