import React from 'react';
import CompanyNotifyForms from './CompanyNotifyForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';

function CompanyNotify() {
    return (
        <>
            <Navbar/>
            <CompanyNotifyForms/>
            <Footer/>
        </>
    );
}

export default CompanyNotify;