import React from 'react';
import './POffers.css';
import PendingOffers from './PendingOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function POffers() {
    return (
        <>
            <Navbar/>
            <PendingOffers/>
            <Footer/>
        </>
    );
}

export default POffers;