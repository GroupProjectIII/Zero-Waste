import React from 'react';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import Footer from './Footer';
import { useHistory } from "react-router-dom";

function BuyerHome() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <HeroSection />
            <Cards />
            <Footer/>
        </>
    );
}

export default BuyerHome;