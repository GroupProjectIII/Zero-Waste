import React from 'react';
import './POffers.css';
import PendingOffers from './PendingOffers';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function POffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <PendingOffers/>
            <Footer/>
        </>
    );
}

export default POffers;