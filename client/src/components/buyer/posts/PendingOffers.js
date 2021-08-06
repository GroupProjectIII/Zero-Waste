import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

function PendingOffers() {

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

    const deleteOffer = (id) => {
        axios.delete(`/deletePendingSellerOffer/${id}`)
            .then((result) => {
                getAllOffers();
            });
    };

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Pending Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?" ></input>
                    <i className="fas fa-search"></i>
                </div>
                <main className="grid-b">
                    {offers.map((offers,index)=>(
                    <article>
                        <div className="text-b">
                            <h3>Post ID: {index+1}</h3>
                            <p>Quantity (Kg): {offers.quantity}</p>
                            <p>Unit Price (Rs): {offers.value}</p>
                            <p>Expiry Date: {moment(offers.expiryDate).fromNow()}</p>
                            <p>Offer Gives: {moment(offers.offerCreatedAt).fromNow()}</p>
                            <div className="buyerlink-b">
                                <Link style={{color: '#fff', textDecoration: 'none'}} to ={`/buyer/editpendingoffers/${offers._id}`}>Edit Offer <i className="fas fa-edit"></i></Link>
                            </div>
                            <div className="delete-button-b">
                                <button onClick={() => { deleteOffer(offers._id) }}>Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>
                    ))}
                </main>
            </div>
        </div>
    );
}

export default PendingOffers;