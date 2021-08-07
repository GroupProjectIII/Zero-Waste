import React from 'react';
import SingleOfferForm from "./SingleOfferForm";
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function SingleOffers() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <SingleOfferForm/>
            <Footer/>
        </>
    );
}

export default SingleOffers;