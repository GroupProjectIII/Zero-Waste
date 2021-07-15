import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import SimpleMap from "./CLocation";

function CompanyLocation() {
    return (
        <>
            <Navbar/>
            <SimpleMap/>
            <Footer/>
        </>
    );
}

export default CompanyLocation;