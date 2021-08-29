import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

import moment from 'moment';
import Offer from "./Offer";

export default function SellerOfferList() {
    if ((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype") === "seller")) {
        history.push("/");
    }

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const sellerId = (localStorage.getItem("userId"));
    console.log("offers page");
    console.log(sellerId)
    const history = useHistory()
   
    
    const [buyerOffers, getBuyerOffers] = useState([]);
    useEffect(() => {
        getAllBuyerOffers();
    }, []);

    const getAllBuyerOffers = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`/sellerViewOffers/${sellerId}`);
                console.log(response);
                const allOffers = response.data.existingOffers;
                if (allOffers.length === 0) {
                    setIsEmpty(true)
                } else {
                    getBuyerOffers(allOffers);
                    setIsLoading(false);
                    setIsEmpty(false);
                }
               
            } catch (error) {
                console.error(`Error: ${error}`)
                setHasError(true)
            }
    }

    console.log(buyerOffers);
    

    
    return (
        <>
            {
                isLoading ?
                    <div className="seller-post-list-background">
                        <h1>Loading....</h1>
                    </div> : hasError ?
                        <div className="seller-post-list-background">
                            <h1>Error occured.</h1>
                        </div> : isEmpty ?
                            <div className="seller-post-list-background">
                                <h1>loading ..</h1>
                            </div> :
                        <div className="seller-post-list-background">
                            <div className="seller-post-list">
                            <main className="grid-b">
                                {buyerOffers.map((offer) => {
                                    if (offer.wasteItemsListId === "completePost" && offer.status === "pending")
                                        return (
                                            <Offer offer={offer} post={ "Complete Post "}/>
                                        )
                                    else if (offer.status === "pending") {
                                        var item = offer.postId.wasteItemList.find(element => element._id === offer.wasteItemsListId);
                                        return (
                                            <Offer offer={offer} post={"Post Item"} item = {item}/>
                                        )
                                        
                                    }
                            })}
                                </main>
                          
                            </div>
                            

                        </div>
            }

        </>
    )
    
}