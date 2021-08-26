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
        await axios.get(`/sellerViewOffers/${sellerId}`)
            .then((response) => {
                const allNotes = response.data.existingOffers;
                getBuyerOffers(allNotes);
            })
            .catch(error => console.error(`Error:${error}`));
    }

    console.log(buyerOffers);

    const sellerAcceptCompletePostOffer = (offerId,postId) => {
        console.log("asp")
        const data = {
            status: "Accepted",
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
    
    return (
        <>
            <div className="seller-offer-list-background">
            <div className="seller-offer-list">
                <table className="seller-offer-table">
                    <tr>
                        <th>Post</th>
                        <th>Item</th>
                        <th>Collecting Date</th>
                        <th>Collecting Time (Aprox:)</th>
                        <th>Buyer</th>
                        <th>Buyer Name</th>
                        <th>Offer(Rs)</th>
                        <th>Offer Exp: Date</th>
                        <th>Action</th>
                    </tr>
                        {buyerOffers.map((offer) => {
                            if(offer.wasteItemsListId === "completePost")
                                return (
                                    <tr>
                                        <td><Link style={{ textDecoration: 'none'}}
                                              to={`/seller/viewpost/${offer.postId}`}>View Post</Link></td>
                                        <td>Complete Post</td>
                                       
                                        <td>{ moment(offer.collectingDate).format("MMMM Do YYYY")}</td>
                                        <td>{offer.collectingTime}</td>
                                        <td><a className="offer-list-view-buyer" href="#" onClick={viewBuyer}>View Buyer</a></td>
                                        <td>Lk Collectors</td>
                                        <td>{offer.value}</td>
                                        <td>{moment(offer.expiryDate).fromNow()}</td>
                                        <td>
                                            <a className="offer-list-accept" href="#" onClick={() => {
                                                let offerId = offer._id;
                                                let postId = offer.postId;
                                                console.log(offerId);
                                                sellerAcceptCompletePostOffer(offerId,postId);
                                            }}>Accept</a>
                                            <a className="offer-list-decline" href="#">Decline</a>
                                        </td>
                                    </tr>
                                    
                                );
                            else
                            return (
                                <tr>
                                    <td><Link style={{ textDecoration: 'none'}}
                                          to={`/seller/viewpost/${offer.postId}`}>View Post</Link></td>
                                    <td><Link style={{ textDecoration: 'none'}}
                                          to={`/seller/viewpost/${offer.postId}/${offer.wasteItemsListId}`}>View Item</Link></td>
                                   
                                    <td>{ moment(offer.collectingDate).format("MMMM Do YYYY")}</td>
                                    <td>{offer.collectingTime}</td>
                                    <td><a className="offer-list-view-buyer" href="#" onClick={viewBuyer}>View Buyer</a></td>
                                    <td>Lk Collectors</td>
                                    <td>{offer.value}</td>
                                    <td>{moment(offer.expiryDate).fromNow()}</td>
                                    <td>
                                        <a className="offer-list-accept" href="#" >Accept</a>
                                        <a className="offer-list-decline" href="#">Decline</a>
                                    </td>
                                </tr>
                                
                            );
                                    
                                
                     
                               
                               
                    })}    
                
                    
                </table>
                </div>
                </div>
        </>
    )
    
}