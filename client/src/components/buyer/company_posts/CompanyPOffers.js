import React from 'react';
import '../posts/POffers.css';
import CompanyPendingOffers from './CompanyPendingOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function CompanyPOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <CompanyPendingOffers/>
            <Footer/>
        </>
    );
}

export default CompanyPOffers;