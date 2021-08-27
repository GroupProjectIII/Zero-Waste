import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from 'axios';
import ProPIc from './BuyerImages/images.jpg';
import "./BuyerReviews.css";

export default function BuyerDetails() {
   
    const { buyerId } = useParams();
    console.log("buyer");
    console.log(buyerId);

    const [buyerDetails, setBuyerDetails] = useState({});
    const [offerList, setOfferList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        getBuyerDetails();
    },[])

    const getBuyerDetails = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`/sellerViewBuyerDetails/${buyerId}`)
            console.log(response);
            const buyerData = response.data.buyer;
            console.log(buyerData);
            setBuyerDetails(buyerData);
            setIsLoading(false)
        } catch (error) {
            console.error(`Error: ${error}`)
            setHasError(true)
        }
    }

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
                        <div className="Buyer-details-background">
                            <div className="seller-buyer-details-card">
                                <div className="seller-buyer-details">
                                    <div className="seller-col-25">
                                        <h1>{buyerDetails.buyerName}</h1>
                                        <div className="ratings-star">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                        </div>
                                        <p>Active Collector Since 2020 Apr</p>
                                        <img src={ProPIc}></img>
                                        <p>{buyerDetails.buyerDescription}</p>
                                    </div>
                                    <div className="seller-col-75">
                                        <div className="s-b-detail">
                                            <h2>Address:</h2>
                                            <p>{buyerDetails.buyerAddress}</p>
                                        </div>
                                        <div className="s-b-detail">
                                            <h2>Contact Number:</h2>
                                           
                                                {buyerDetails && buyerDetails.buyerContact && buyerDetails.buyerContact.map((contact) => {
                                                    return (
                                                        <h4>{contact}</h4>
                                                    );
                                                })}
                                           
                                            
                                        </div>
                    
                    
                                        <div className="seller-buyer-type-list">
                                            <h2>Favourite Waste Types:</h2>
                                            <ul>
                                                {buyerDetails && buyerDetails.favouriteWasteTypes && buyerDetails.favouriteWasteTypes.map((type) => {
                                                    return (
                                                        <li>{type}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div className="seller-buyer-type-list">
                                            <h2>Favourite Waste Items:</h2>
                                            <ul>
                                                {buyerDetails && buyerDetails.favouriteWasteItems && buyerDetails.favouriteWasteItems.map((item) => {
                                                    return (
                                                   
                                                        
                                                        <li>{item}</li>
                                                        
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div className="seller-buyer-area-list">
                                            <h2>Favourite Collecting Areas:</h2>
                                            <ul>
                                                {buyerDetails && buyerDetails.favouriteAreas && buyerDetails.favouriteAreas.map((area) => {
                                                    return (
                                                        <li>{area}</li>
                                                    );
                                                })}
                            
                                            </ul>
                                            
                        
                                        </div> 
                                        <div className="seller-sell-now">
                                                <button>Sell Now</button>
                                        </div>
                    
                    
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>Reviews & Comments <i class="fas fa-comments"></i></h1>
                                <div className="seller-add-comment">
                                    <form className="seller-add-comment-form">
            
                                        <input type="text" placeholder="Add New Comment" id="comment" />
                                        <button type="submit"><i class="fas fa-envelope"></i></button>
                                    </form>
                                </div>
                                <div className="buyer-comments-area">
                                    <div className="seller-comment-card">
                                        <div className="seller-comment-details">
                                            <h4>John Snow</h4>
                                            <p>2021 Apr 20  20:21</p>

                                        </div>
                                        <div className="seller-comment">
                                            <p>very good service.</p>
                                        </div>

                                    </div>
                                    <div className="seller-reply-card">
                                        <div className="seller-comment-details">
                                            <h4>Lk Collectors</h4>
                                            <p>2021 Apr 20  20:21</p>

                                        </div>
                                        <div className="seller-comment">
                                            <p>Thank You!</p>
                                        </div>

                                    </div>
                                </div>

       
                            </div>
                        </div>
            }
        </>
    )
}