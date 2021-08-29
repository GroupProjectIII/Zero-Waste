import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from 'axios';
import ProPIc from './BuyerImages/images.jpg';
import "./BuyerReviews.css";
import CardItem from "../../company/components/company/home/CardItem";

export default function BuyerDetails() {

    const { buyerId } = useParams();
    console.log("buyer");
    console.log(buyerId);

    const [buyer, setBuyerDetails] = useState({});
    const [comments, setComments] = useState([]);
    const [offerList, setOfferList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        getBuyerDetails();
    }, [])
    useEffect(() => {
        getComments();
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
    const getComments = async () => {
        try {
            const responce = await axios.get(`/viewBuyerComments/${buyerId}`)
            const commentlist = responce.data.buyerComments;
            setComments(commentlist)
            console.log("comments",comments)
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    return (
        <div className="Buyer-details-background">
        <div className="seller-buyer-details-card">
            <div className="seller-buyer-details">
                <div className="seller-col-25">
                        <h1>{buyer.buyerName}</h1>
                    <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                    </div>
                        
        
                    <img src={ProPIc}></img>
                        <p>{buyer.buyerDescription}</p>
                </div>
                <div className="seller-col-75">
                    <div className="s-b-detail">
                        <h2>Address:</h2>
                            <p>{buyer.buyerAddress}</p>
                    </div>
                    <div className="s-b-detail">
                            <h2>Contact Number:</h2>
                            {buyer && buyer?.buyerContact && buyer?.buyerContact.map((contact)=>{
                                return(
                                    <p>{contact}</p>
                                );
                            })}
                        
                    </div>
                    
                    
                    <div className="seller-buyer-type-list">
                        <h2>Favourite Waste Types:</h2>
                        <ul>
                                {buyer && buyer?.favouriteWasteTypes && buyer?.favouriteWasteTypes.map((type) => {
                                    return (
                                        <li>{type}</li>
                                    );

                                })}
                                
                        </ul>
                        
                        </div>
                        <div className="seller-buyer-type-list">
                        <h2>Favourite Waste Items:</h2>
                        <ul>
                                {buyer && buyer?.favouriteWasteItems && buyer?.favouriteWasteItems.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    );

                                })}
                                
                        </ul>
                        
                    </div>
                    <div className="seller-buyer-area-list">
                        <h2>Favourite Collecting Areas:</h2>
                        <ul>
                                {buyer && buyer?.favouriteAreas && buyer?.favouriteAreas.map((area) => {
                                    return (
                                        <li>{area}</li>
                                    );
                                })}
                                
                            
                        </ul>
                        
                        <div className="seller-sell-now">
                            <button>Sell Now</button>
                        </div>
                        
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
    )
}