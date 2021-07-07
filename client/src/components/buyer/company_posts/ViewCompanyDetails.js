import React from 'react';
import ViewCompany from './ViewCompany';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function ViewCompanyDetails() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <ViewCompany/>
            <Footer/>
        </>
    );
}

export default ViewCompanyDetails;