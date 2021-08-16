import React from 'react';
import VNotifications from './VNotifications';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function ViewNotifications() {
    return (
        <>
            <Navbar/>
            <VNotifications/>
            <Footer/>
        </>
    );
}

export default ViewNotifications;