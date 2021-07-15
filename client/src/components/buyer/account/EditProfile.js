import React from 'react';
import EditProfileForms from "./EditProfileForm";
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {useHistory} from "react-router-dom";

function EditProfile() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <EditProfileForms/>
            <Footer/>
        </>
    );
}

export default EditProfile;