import React from 'react';
import './AOffers.css';
import AcceptedOffers from './AcceptedOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function AOffers() {
    return (
        <>
            <Navbar/>
            <AcceptedOffers/>
            <Footer/>
        </>
    );
}

export default AOffers;