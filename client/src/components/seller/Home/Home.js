import React from 'react';
import './Home.css';
import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';
import HeroSection from './HeroSection';
import Cards from './Cards';

function Home() {
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