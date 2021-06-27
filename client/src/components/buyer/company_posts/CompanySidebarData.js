import React from 'react';
import * as IoIcons from 'react-icons/io';

export const CompanySidebarData = [
    {
        title: 'View Company Posts',
        path: '/companyposts',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Accepted Offers',
        path: '/companyacceptedoffers',
        icon: <IoIcons.IoIosPaper />,
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