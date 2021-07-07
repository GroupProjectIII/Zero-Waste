import React from 'react';
import CompanyForms from './CompanyForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function CompanyOfferForm() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <CompanyForms/>
            <Footer/>
        </>
    );
}

export default CompanyOfferForm;