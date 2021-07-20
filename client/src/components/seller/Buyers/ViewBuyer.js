import React from "react";
import { useHistory } from "react-router";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import BuyerDetails from "./BuyerDetails";
import "./ViewBuyer.css";
import BuyerReviews from './BuyerReviews';

export default function ViewBuyer() {

    const history = useHistory();
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <BuyerDetails />
            <BuyerReviews />
            <Footer />
        </>
    )
} 