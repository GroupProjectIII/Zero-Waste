import React from 'react';
import { useHistory } from 'react-router';
import './Home.css';
import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';
import HeroSection from './HeroSection';
import Cards from './Cards';

function Home() {
    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }
    return (
        <>
           
            <Navbar />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;