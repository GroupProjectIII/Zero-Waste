import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';
import {Slide, toast, ToastContainer} from "react-toastify";

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
                toastNotification();
                getAllOffers();
            });
    };

    const toastNotification = () => {
        toast.info("Deleted successfully !", {
            transition: Slide
        })
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
                    {offers.map((offer,index)=> {
                        if(offer.status==='pending')
                        return (
                            <article>
                                <div className="text-b">
                                    <h3>Post ID: {index + 1}</h3>
                                    <p>Quantity (Kg): {offer.quantity}</p>
                                    <p>Unit Price (Rs): {offer.value}</p>
                                    <p>Expiry Date: {moment(offer.expiryDate).fromNow()}</p>
                                    <p>Collecting Date: {moment(offer.collectingDate).fromNow()}</p>
                                    <p>Offer Gave: {moment(offer.offerCreatedAt).fromNow()}</p>
                                    <div className="buyerlink-b">
                                        <Link style={{color: '#fff', textDecoration: 'none'}}
                                              to={`/buyer/editpendingoffers/${offer._id}`}>Edit Offer <i className="fas fa-edit"></i></Link>
                                    </div>
                                    <div className="delete-button-b">
                                        <button onClick={() => {
                                            deleteOffer(offer._id)
                                        }}>Delete Offer <i className="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </main>
            </div>
            <ToastContainer position="top-right" toastStyle={{ backgroundColor: "orange" }} autoClose={3000} />
        </div>
    );
}

export default PendingOffers;