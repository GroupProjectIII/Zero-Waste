import React from 'react';
import AComplaints from './AComplaints';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import AccountSidebar from "./AccountSidebar";
import {useHistory} from "react-router-dom";

function AddComplaints() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <AccountSidebar/>
            <AComplaints/>
            <Footer/>
        </>
    );
}

export default AddComplaints;