import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import CompanyAcceptedOffers from "./CompanyAcceptedOffers";
import {useHistory} from "react-router-dom";

function CompanyAOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <CompanyAcceptedOffers/>
            <Footer/>
        </>
    );
}

export default CompanyAOffers;