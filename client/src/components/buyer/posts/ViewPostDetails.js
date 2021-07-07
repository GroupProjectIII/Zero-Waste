import React from 'react';
import ViewPost from './ViewPost';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function ViewPostDetails() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <ViewPost/>
            <Footer/>
        </>
    );
}

export default ViewPostDetails;