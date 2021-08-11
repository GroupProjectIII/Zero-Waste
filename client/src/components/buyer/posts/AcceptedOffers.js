import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

function AcceptedOffers() {

    const buyerId=(localStorage.getItem("userId"));
    console.log(buyerId);

    const [offers, getOffers] = useState([]);

    useEffect(()=>{
        getAllOffers();
    }, []);

    const getAllOffers = async () => {
        await axios.get(`/viewPendingSellerOffers`)
            .then ((response)=>{
                const allNotes=response.data.existingOffers;
                getOffers(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(offers);

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Accepted Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <main className="grid-b">
                    {offers.map((offer,index)=> {
                        if(offer.status==='accepted' && offer.buyerId===buyerId)
                            return (
                                <article>
                                    <div className="text-b">
                                        <h3>Post ID: {index + 1}</h3>
                                        <p>Quantity (Kg): {offer.quantity}</p>
                                        <p>Unit Price (Rs): {offer.value}</p>
                                        <p>Expiry Date: {moment(offer.expiryDate).fromNow()}</p>
                                        <p>Collecting Date: {moment(offer.collectingDate).fromNow()}</p>
                                        <p>Offer Gives: {moment(offer.offerCreatedAt).fromNow()}</p>
                                        <div className="buyerlink-b">
                                            <Link style={{color: '#fff', textDecoration: 'none'}}
                                                  to={`/buyer/location/${offer._id}`}>View Location <i className="fas fa-search-location"></i></Link>
                                        </div>
                                        <div className="buyerlink-b">
                                            <Link style={{color: '#fff', textDecoration: 'none'}}
                                                  to={`/buyer/viewofferdetails/${offer._id}`}>View Details <i className="fas fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </article>
                            );
                    })}
                </main>
            </div>
        </div>
    );
}

export default AcceptedOffers;