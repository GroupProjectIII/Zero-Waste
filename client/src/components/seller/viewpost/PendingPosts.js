import './PendingPosts.css';
import '../../buyer/posts/Posts.css';
import Bottles from './postPics/bottles.jpg';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';



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
                                                <article>
                                                    <img src={note.thumbnail} alt=""></img>
                                                    <div className="text-b">
                                                        <h3>Post ID: {index + 1}</h3>
                                                        <p>Seller Name: {note.sellerName}</p>
                                                        <p>District: {note.sellerDistrict}</p>
                                                        <p>Post Type: {note.postType}</p>
                                                        <p>Address: {note.address}</p>
                                                        <p>Telephone No: {note.contact}</p>
                                                        <div className="buyerlink-b">
                                                            <Link style={{ color: '#fff', textDecoration: 'none' }}
                                                                to={`/seller/viewpost/${note._id}`}>View Post <i
                                                                    className="fas fa-angle-double-right"></i></Link>
                                                        </div>
                                                        <div className="buyerlink-b">
                                                            <Link style={{ color: '#fff', textDecoration: 'none' }}
                                                                to={`/seller/viewpost/${note._id}`}>Edit Post <i
                                                                    className="fas fa-angle-double-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </article>
                                            );
                                    
                            
                                    })}

                  
                                </main>
                                <div className="seller-post-card">
                                    <h2>Post Id : 0001</h2>
                                    <h2>Buyers : All</h2>
                                    <a className="item-edit-all-button" href="#">Edit</a>
                                    <a className="item-remove-all-button" href="#">Remove</a>
                                    <div className="seller-post-card-item-row">
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                         
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>

                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                    
                                    </div>
                    
                                </div>
                                <div className="seller-post-card">
                                    <h2>Post Id : 0002</h2>
                                    <h2>Buyers : All</h2>
                                    <a className="item-edit-all-button" href="#">Edit</a>
                                    <a className="item-remove-all-button" href="#">Remove</a>
                                    <div className="seller-post-card-item-row">
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                                        <div className="seller-post-card-item">
                                            <div className="seller-post-card-item-header">
                                                <h3>Item: 1</h3>
                                                <a className="item-edit-button" href="#">Edit</a>
                                                <a className="item-remove-button" href="#">Remove</a>
                                            </div>
                                            <div className="seller-post-card-item-details">
                                                <h4>Plastic | Bottle</h4>
                                                <img src={Bottles} alt="img" />
                                                <p>10kg</p>
                                                <p>Available On - 2021 03 04</p>
                                            </div>
                                        </div>
                    
                                    </div>
                    
                                </div>
            
                            </div>

                        </div>
            }


        </>
        
    )
}