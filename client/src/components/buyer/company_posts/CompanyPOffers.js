import React from 'react';
import '../posts/POffers.css';
import CompanyPendingOffers from './CompanyPendingOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function CompanyPOffers() {
    return (
        <>
            <Navbar/>
            <CompanyPendingOffers/>
            <Footer/>
        </>
    );
}

export default CompanyPOffers;