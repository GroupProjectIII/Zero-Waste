import React from 'react';
import EditOfferForms from './EditPendingOffersForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function EditPendingOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <EditOfferForms/>
            <Footer/>
        </>
    );
}

export default EditPendingOffers;