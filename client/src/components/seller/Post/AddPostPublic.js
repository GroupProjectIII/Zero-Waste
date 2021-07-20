import React from "react";
import { useHistory } from "react-router";
import PostForm from './PostForm';
import "./AddPost.css";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";

export default function PostHome() {
    
    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    

    const directPost = () => {
        history.push("/seller/findbuyers");
    }
    
   
    return (
        <div>
            <Navbar />
            <PostForm />
           <Footer />
        </div>
    )
}
