import React from 'react';
import './Services.css';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function Services() {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Posts />
            <Footer/>
        </>
    );
}

export default Services;
