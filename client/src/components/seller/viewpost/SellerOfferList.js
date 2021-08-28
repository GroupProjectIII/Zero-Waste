import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './SellerOfferList.css';
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
                            <div className="seller-offer-list">
                                <table className="seller-offer-table">
                                    <tr>
                  
                                        <th>Post</th>
                                        <th>Item</th>
                                        <th>Collecting Date</th>
                                        <th>Collecting Time (Aprox:)</th>
                                        <th>Buyer</th>
                        
                                        <th>Offer(Rs)</th>
                                        <th>Offer Exp: Date</th>
                                        <th>Action</th>
                                    </tr>
                                    {buyerOffers.map((offer) => {
                                        if (offer.wasteItemsListId === "completePost" && offer.status === "pending")
                                            return (
                                                <tr>
                                        
                                                    <td><Link style={{ textDecoration: 'none' }}
                                                            to={`/seller/viewpost/${offer.postId}`}>
                                                            <img classNane="seller-offer-image"
                                                                src={offer?.postId?.thumbnail}
                                                                alt=""></img>
                                                        </Link>
                                                    </td>
                                                    <td>Complete Post</td>
                                       
                                                    <td>{moment(offer.collectingDate).format("MMMM Do YYYY")}</td>
                                                    <td>{offer.collectingTime}</td>
                                                    <td><Link style={{ textDecoration: 'none' }}
                                                        to={`/seller/buyer/${offer.buyerId}`}>{offer.buyerName}</Link></td>
                                    
                                                    <td>{offer.value}</td>
                                                    <td>{moment(offer.expiryDate).fromNow()}</td>
                                                    <td>
                                                        <a className="offer-list-accept" href="#" onClick={() => {
                                                            let offerId = offer._id;
                                                            let postId = offer.postId;
                                                            console.log(offerId);
                                                            sellerAcceptCompletePostOffer(offerId, postId);
                                                        }}>Accept</a>
                                                        <a className="offer-list-decline" href="#" onClick={() => {
                                                            let offerId = offer._id;
                                                            sellerDeclineOffer(offerId);
                                                        }}>Decline</a>
                                                    </td>
                                                </tr>
                                    
                                            );
                                        else if (offer.status === "pending")
                                            var item = offer.postId.wasteItemList.find(element => element._id === offer.wasteItemsListId);
                            
                                        return (
                                            <tr>
                                                <td>
                                                    <Link style={{ textDecoration: 'none' }}
                                                        to={`/seller/viewpost/${offer.postId}`}>
                                                        <img classNane="seller-offer-image"
                                                            src={offer?.postId?.thumbnail}
                                                            alt="">
                                                        </img>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link style={{ textDecoration: 'none' }}
                                                        to={`/seller/viewpost/${offer.postId}/${offer.wasteItemsListId}`}>
                                                        <img classNane="seller-offer-image"
                                                            src={item.selectedFile} alt="">
                                                        </img>
                                                    </Link>
                                                </td>
                                            
                                                <td>{moment(offer.collectingDate).format("MMMM Do YYYY")}</td>
                                                <td>{offer.collectingTime}</td>
                                                <td><Link style={{ textDecoration: 'none' }}
                                                    to={`/seller/buyer/${offer.buyerId}`}>{offer.buyerName}</Link></td>
                                                <td>{offer.value}</td>
                                                <td>{moment(offer.expiryDate).fromNow()}</td>
                                                <td>
                                                    <a className="offer-list-accept" href="#" onClick={() => {
                                                        let offerId = offer._id;
                                                        let itemId = offer.wasteItemsListId;
                                                        sellerAcceptWasteItemOffer(offerId, itemId);
                                                    }}>Accept</a>
                                                    <a className="offer-list-decline" href="#" onClick={() => {
                                                        let offerId = offer._id;
                                                        sellerDeclineOffer(offerId);
                                                    }}>Decline</a>
                                                </td>
                                            </tr>
                                        );
                             
        
                                    
                                
                     
                               
                               
                                    })}
                
                    
                                </table>
                            </div>
                        </div>
            }

        </>
    )
    
}