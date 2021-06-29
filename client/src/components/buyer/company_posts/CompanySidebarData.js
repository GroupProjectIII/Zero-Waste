import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

export const CompanySidebarData = [
    {
        title: 'View Company Posts',
        path: '/companyposts',
        icon: <FaIcons.FaAdversal />,
        cName: 'nav-text'
    },
    {
        title: 'Accepted Offers',
        path: '/companyacceptedoffers',
        icon: <MdIcons.MdLocalOffer />,
        cName: 'nav-text'
    },
    {
        title: 'Pending Offers',
        path: '/companypendingoffers',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Search Company',
        path: '/viewcompanydetails',
        icon: <IoIcons.IoIosSearch />,
        cName: 'nav-text'
    },
];