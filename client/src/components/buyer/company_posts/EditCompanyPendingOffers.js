import React from 'react';
import EditCompanyOfferForms from './EditCompanyPendingOffersForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function EditCompanyPendingOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <EditCompanyOfferForms/>
            <Footer/>
        </>
    );
}

export default EditCompanyPendingOffers;