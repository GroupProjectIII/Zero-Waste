import React from 'react';
import CompanyNotifyForms from './CompanyNotifyForm';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function CompanyNotify() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <CompanyNotifyForms/>
            <Footer/>
        </>
    );
}

export default CompanyNotify;