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
    const type=(localStorage.getItem("usertype"));
    const name=(localStorage.getItem("username"));
    const email=(localStorage.getItem("email"));
    const id=(localStorage.getItem("id"));
    const date=(localStorage.getItem("registeredAt"));
    console.log(type);
    console.log(name);
    console.log(email);
    console.log(id);
    console.log(date);
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