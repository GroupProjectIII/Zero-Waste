import './PendingPosts.css';
import Bottles from './postPics/bottles.jpg';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function PendingPosts() {

    const history = useHistory();
    
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }
    
    const sellerId=(localStorage.getItem("id"));
    console.log(sellerId);
    
    const [sellerPosts, setSellerPosts] = useState([]);

    useEffect(() => {
        getSellerPosts();
    }, []);

    const getSellerPosts = async () => {
        try {
            const responce = await axios.get(`/sellerViewPosts/${sellerId}`)
            console.log(responce);
            setSellerPosts(responce.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }

    }

    console.log(sellerPosts);

    return (

        <div className="seller-post-list-background">

        <div className="seller-post-list">
            
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


    )
}