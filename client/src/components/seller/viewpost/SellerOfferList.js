import { useHistory } from 'react-router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SellerOfferList.css';

export default function SellerOfferList() {
    if ((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype") === "seller")) {
        history.push("/");
    }
   
    const sellerId = (localStorage.getItem("id"));
    console.log("offers page");
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
    
    return (
        <>
            <div className="seller-offer-list-background">
            <div className="seller-offer-list">
                <table className="seller-offer-table">
                    <tr>
                        <th>Post Id</th>
                        <th>Item Id</th>
                        <th>Type</th>
                        <th>Item</th>
                        <th>Due Date</th>
                        <th>Collecting Date</th>
                        <th>Buyer Id</th>
                        <th>Buyer Name</th>
                        <th>Offer(Rs)</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#" onClick={viewBuyer}>View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#">View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#">View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    
                </table>
                </div>
                </div>
        </>
    )
    
}