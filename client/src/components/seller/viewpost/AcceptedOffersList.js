import './AcceptedOffersList.css';
import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import './SellerOfferList.css';
import moment from 'moment';

export default function AcceptedOffersList() {
    const history = useHistory()
    if ((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype") === "seller")) {
        history.push("/");
    }

    const sellerId = (localStorage.getItem("userId"));
    console.log(sellerId)
    useEffect(() => {
        getAcceptedOffers()
    }, [])
    
    const [acceptedOffers, setAcceptedOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
   
    const getAcceptedOffers = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`/sellerViewAcceptedOffers/${sellerId}`);
          //  console.log(response);
            const acceptedOffers = response.data.acceptedOffers;
            setAcceptedOffers(acceptedOffers);
            setIsLoading(false)
        } catch (error) {
            console.error(`Error: ${error}`)
            setHasError(true)
        }
    }
    console.log("accepyted offers")
    console.log(acceptedOffers)
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
                        <div className="seller-accepted-offer-list-background">
                            <div className="seller-accepted-offers">
                                <div className="seller-accepted-offers-header">
                                    <h3>Not Collected</h3>
                                </div>
                                <div className="seller-offer-list">
                                <table className="seller-accepted-offers-table">
                                    <tr>
                                        <th>Post Id</th>
                                        <th>Item Id</th>
                                        <th>Buyer</th>
                                        <th>Collecting Date</th>
                                        <th>Collecting Time</th>
                                        <th>Offer Value(Rs)</th>
                                        <th>Buyer transaction Code</th>
                                    </tr>
                                    {acceptedOffers.map((offer) => {
                                        if (offer.wasteItemsListId === "completePost") {
                                            return (
                                                <tr>
                                                    <td>
                                                        <Link style={{ textDecoration: 'none' }}
                                                        to={`/seller/viewpost/${offer.postId._id}`}>
                                                        <img classNane="seller-offer-image"
                                                            src={offer?.postId?.thumbnail}
                                                            alt="">
                                                        </img>
                                                        </Link>
                                                    </td>
                                                    <td>Complete Post</td>
                                                    <td>{offer.buyerName}</td>
                                                    <td>{moment(offer.collectingDate).format("LL")}</td>
                                                    <td>{offer.collectingTime}</td>
                                                    <td>{offer.value}</td>
                                                    <td><input type="text"></input><a className="item-collected-btn" href="#">Submit</a></td>
                                                </tr>
                                            )
                                        } else {
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
                                                    <td>{offer.buyerName}</td>
                                                    <td>{moment(offer.collectingDate).format("LLL")}</td>
                                                    <td>{offer.collectingTime}</td>
                                                    <td>{offer.value}</td>
                                                    <td><input type="text"></input><a className="item-collected-btn" href="#">Submit</a></td>
                                                </tr>
                                            )
                                        }
                        
                                    })}
                    

                                    </table>
                                </div>
                            </div>
                        </div>
            }
        </>
        
    );
}