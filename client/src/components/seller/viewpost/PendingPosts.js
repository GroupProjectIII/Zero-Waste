import './PendingPosts.css';
import '../../buyer/posts/Posts.css';
import Bottles from './postPics/bottles.jpg';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostList from "./PostList";


export default function PendingPosts() {

    const history = useHistory();
    
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }
    
    const sellerId=(localStorage.getItem("userId"));
    console.log(sellerId);
    
    const [sellerPosts, setSellerPosts] = useState([]);
    const [sellerOffers, setSellerOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        getSellerPosts();
    }, []);

    const getSellerPosts = async () => {
        setIsLoading(true)
        try {
            const responce = await axios.get(`/sellerViewPosts/${sellerId}`)
            console.log(responce);
            setSellerPosts(responce.data.existingPosts);
            setSellerOffers(responce.data.existingOffers);
            setIsLoading(false)
        } catch (error) {
            console.error(`Error: ${error}`);
            setHasError(true)
        }

    }

    console.log("SELLERPOSTS",sellerPosts);
    console.log("SelleroFFERS",sellerOffers);

    const wasteItem = sellerOffers?.filter(wasteItem => wasteItem.status==='accepted' );
    console.log(wasteItem);
    return (
        <>
            {
                isLoading ?
                    <div className="seller-post-list-background">
                        <h1>Loading....</h1>
                    </div> : hasError ?
                        <div className="seller-post-list-background">
                            <h1>Error occured.</h1>
                        </div> :

                        <div className="seller-post-list-background">

                            <div className="seller-avb-post-list">
                                <main className="grid-b">
                                    {sellerPosts.map((note, index) => {
                                        if (wasteItem.find(o => o.postId === note._id) === undefined)
                                            return (
                                                <PostList note={note}/>
                                               
                                            );
                                    
                            
                                    })}

                  
                                </main>
                             
            
                            </div>

                        </div>
            }


        </>
        
    )
}