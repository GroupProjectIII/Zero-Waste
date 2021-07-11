import React from "react";
import { useHistory } from "react-router";
import PostForm from './PostForm';
import "./AddPost.css";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";

export default function PostHome() {

    const history = useHistory();

    const directPost = () => {
        history.push("/seller/findbuyers");
    }
    
   
    return (
        <div>
            <Navbar />
            <PostForm />

            <div className="send-direct-post">
                <h3>Need to send post directly to your favourite Buyer??<a href="#" onClick={directPost}>Try This</a></h3>
            </div>
           <Footer />
        </div>
    )
}
