import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import SimpleMap from "./Location";
import {useHistory} from "react-router-dom";

function PostsLocation() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <SimpleMap/>
            <Footer/>
        </>
    );
}

export default PostsLocation;