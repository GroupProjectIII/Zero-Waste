import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Available Posts',
        path: '/seller/viewposts',
        icon: <FaIcons.FaAdversal />,
        cName: 'nav-text'
    },
    {
        title: 'View Offers',
        path: '/seller/offers',
        icon: <MdIcons.MdLocalOffer />,
        cName: 'nav-text'
    },
    {
        title: 'Previous Posts',
        path: '/seller/pendingoffers',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
];