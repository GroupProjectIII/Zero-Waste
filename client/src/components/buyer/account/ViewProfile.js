import React from "react";
import VProfile from './VProfile';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import AccountSidebar from "./AccountSidebar";

function ViewProfile(){

    return (
        <>
            <Navbar/>
            <AccountSidebar/>
            <VProfile/>
            <Footer/>
        </>
    );

}
export default ViewProfile; 