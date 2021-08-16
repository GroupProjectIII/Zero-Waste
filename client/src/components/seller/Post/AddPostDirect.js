import React from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import PostFrom from "./PostFormNew";
import { useHistory } from "react-router";

export default function DirectPost() {
    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }
   
    return (
        <>
            <Navbar />
            <PostFrom />
            <Footer />
        </>
    )
}