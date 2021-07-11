import React from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import BuyerDetails from "./BuyerDetails";
import "./ViewBuyer.css";


export default function ViewBuyer() {
    return (
        <>
            <Navbar />
            <BuyerDetails />
            <Footer />
        </>
    )
} 