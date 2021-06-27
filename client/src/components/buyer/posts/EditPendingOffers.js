import React from 'react';
import EditOfferForms from './EditPendingOffersForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function EditPendingOffers() {
    return (
        <>
            <Navbar/>
            <EditOfferForms/>
            <Footer/>
        </>
    );
}

export default EditPendingOffers;