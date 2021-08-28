import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './SellerOfferList.css';
import './PendingPosts.css';
import moment from 'moment';

export default function SellerOfferList() {
    if ((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype") === "seller")) {
        history.push("/");
    }

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
   
    const sellerId = (localStorage.getItem("userId"));
    console.log("offers page");
    console.log(sellerId)
    const history = useHistory()
    const viewBuyer = () => {
        history.push('/seller/buyer')
    }
    
    const [buyerOffers, getBuyerOffers] = useState([]);
    useEffect(() => {
        getAllBuyerOffers();
    }, []);

    const getAllBuyerOffers = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`/sellerViewOffers/${sellerId}`);
              //  console.log(response);
                const allOffers = response.data.existingOffers;
                getBuyerOffers(allOffers);
                setIsLoading(false)
            } catch (error) {
                console.error(`Error: ${error}`)
                setHasError(true)
            }
    }

    console.log(buyerOffers);

    const sellerAcceptCompletePostOffer = (offerId,postId) => {
        console.log("asp")
        const data = {
            status: "accepted",
            postId: postId
        };
        axios.patch(`/sellerAcceptPostOffer/${offerId}`, data)
            .then((result) => {
                console.log("ACCPTED")
           //     clear();
              //  toastNotification();
              //  history.push(`/seller/home`);
        });
    }
    const sellerDeclineOffer = (offerId) => {
        const data = {
            status:"declined"
        }
        axios.patch(`/sellerDeclineOffer/${offerId}`, data)
            .then((result) => {
                console.log("offer Rejected")
            });
    }

    const sellerAcceptWasteItemOffer = (offerId, itemId) => {
        const data = {
            status: "accepted",
            wasteItemsListId:itemId,
        }
        axios.patch(`/sellerAceptWasteItemOffer/${offerId}`, data)
            .then((result) => {
                console.log("offer accepted")
            });

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
                        <div className="seller-offer-list-background">

                            <div className="seller-post-list">
                                {buyerOffers.map((offer) => {
                                    if (offer.wasteItemsListId === "completePost" && offer.status === "pending")
                                        return (
                                            <div className="seller-post-card">
                                                <h2>Offer For Complete Post</h2>
                                                <img src={offer?.postId?.thumbnail} alt=""></img>
                                                <p>Post Created At: {moment(offer?.postId?.ceratedAt).format("LLLL") }</p>
                                                <div className="seller-post-offer-details">
                                                    <h3>Buyer : {offer.buyerName}</h3>
                                                    <h3>Value: {offer.value}</h3>
                                                    <h3>Collecting Date: {moment(offer.collectingDate).format("LL")}</h3>
                                                    <h3>Collecting Time:{offer.collectingTime}</h3>
                                                    <h3>Offer Expire In: {moment(offer.expiryDate).fromNow()}</h3>
                                                    <a className="offer-list-accept"
                                                        href="#"
                                                        onClick={() => {

                                                            let offerId = offer._id;
                                                            let postId = offer.postId;
                                                            console.log(offerId);
                                                            sellerAcceptCompletePostOffer(offerId, postId);

                                                        }}
                                                    >Accept</a>
                                                    <a className="offer-list-decline"
                                                        href="#"
                                                        onClick={() => {
                                                            let offerId = offer._id;
                                                            sellerDeclineOffer(offerId);
                                                        }}
                                                    >Decline</a>
                                                </div>
                                                <div className="seller-post-card-item-row">
                                                    
                                                        {offer && offer?.postId && offer?.postId?.wasteItemList.map((item) => {
                                                            return (
                                                                <div className="seller-post-card-item">
                                                                    <div className="seller-post-card-item-header">
                                                                        <h3>Item: 1</h3>
                                                                    </div>
                                                                    <div className="seller-post-card-item-details">
                                                                        <h4>{item.wasteType} | {item.item}</h4>
                                                                        <img src={item.selectedFile} alt="img" />
                                                                        <p>Quantity: {item.quantity}</p>
                                                                        <p>Available In:{moment(item.avbDate).format("LL")}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                        
                                                   
                                                </div>
                                            </div>
                                        )
                                    else if (offer.status === "pending") {
                                        var item = offer.postId.wasteItemList.find(element => element._id === offer.wasteItemsListId);
                                        return (
                                            <div className="seller-post-card">
                                                <h2>Offer For Post Item</h2>
                                                <img src={offer?.postId?.thumbnail} alt=""></img>
                                                <p>Post Created At: {moment(offer?.postId?.ceratedAt).format("LLLL") }</p>
                                                <div className="seller-post-offer-details">
                                                    <h3>Buyer : {offer.buyerName}</h3>
                                                    <h3>Value: {offer.value}</h3>
                                                    <h3>Collecting Date: {moment(offer.collectingDate).format("LL")}</h3>
                                                    <h3>Collecting Time:{offer.collectingTime}</h3>
                                                    <h3>Offer Expire In: {moment(offer.expiryDate).fromNow()}</h3>
                                                    <a className="offer-list-accept"
                                                        href="#"
                                                        onClick={() => {
                                                            let offerId = offer._id;
                                                            let postId = offer.postId;
                                                            console.log(offerId);
                                                            sellerAcceptCompletePostOffer(offerId, postId);
                                                        }}
                                                    >Accept</a>
                                                    <a className="offer-list-decline"
                                                        href="#"
                                                        onClick={() => {
                                                            let offerId = offer._id;
                                                            sellerDeclineOffer(offerId);
                                                        }}
                                                    >Decline</a>
                                                </div>
                                                <div className="seller-post-card-item-row">

                                                    <div className="seller-post-card-item">
                                                        <div className="seller-post-card-item-header">
                                                            <h3>Item: 1</h3>
                                                        </div>
                                                        <div className="seller-post-card-item-details">
                                                            <h4>{item.wasteType} | {item.item}</h4>
                                                            <img src={item.selectedFile} alt="img" />
                                                            <p>Quantity: {item.quantity}</p>
                                                            <p>Available In:{moment(item.avbDate).format("LL")}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                       
                                            </div>
                                        )
                                        
                                    }
                            })}
                                
                            </div>
                            

                        </div>
            }

        </>
    )
    
}