import React from 'react';
import CPosts from './CPosts';
import CompanySidebar from './CompanySidebar';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function CompanyPosts() {
    return (
        <>
            <Navbar/>
            <CompanySidebar/>
            <CPosts />
            <Footer/>
        </>
    );
}

export default CompanyPosts;