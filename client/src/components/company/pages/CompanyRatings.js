import React from 'react';
import ViewCompanyRatings from '../components/company/posts/ViewCompanyRatings';
import Navbar from '../components/company/home/Navbar';
import Footer from '../components/company/home/Footer';
import PostSidebar from '../components/company/posts/PostSidebar';
import { useHistory } from "react-router-dom";

function CompanyRatings() {
    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="company")){
        history.push("/");
    }

    return (
        <>
            <Navbar/>
            <PostSidebar />
            <ViewCompanyRatings/>
            <Footer/>
        </>
    );
}

export default CompanyRatings;