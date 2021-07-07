import React from 'react';
import './AOffers.css';
import AcceptedOffers from './AcceptedOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function AOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <AcceptedOffers/>
            <Footer/>
        </>
    );
}

export default AOffers;