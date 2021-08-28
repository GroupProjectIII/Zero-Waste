import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Buyer.css';
import buypic from './BuyerImages/images.jpg';

export default function Buyer() {

    useEffect(() => {
        getAllSellers() 
     }, [])
     const [buyers, setBuyers] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [hasError, setHasError] = useState(false);
 
     const getAllSellers = async () => {
         setIsLoading(true)
         try {
             const response = await axios.get(`/viewAllBuyers`)
          //   console.log(response);
             const allBuyers = response.data.buyer;
             setBuyers(allBuyers);
             setIsLoading(false)
         } catch (error) {
             console.error(`Error: ${error}`)
             setHasError(true)
         }
     }
     console.log(buyers);

    const history = useHistory();

    const viewdirectpost = () => {

        history.push("/seller/directpost")
    }
    const viewbuyer = () => {
        history.push("/seller/buyer")
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
                        <div className="buyer-list-background">
                            <div className="view-buyers">
            
           
                                <div class="seller-buyer-search-container">
                                    <form className="seller-search-buyer">
                                        <label className="serch-buyer-lable">Waste Type</label>
                                        <input type="text" placeholder="Search.." name="search" id="serchinput" />
                                        <label className="serch-buyer-lable">Waste Item</label>
                                        <input type="text" placeholder="Search.." name="search" id="serchinput" />
                                        <label className="serch-buyer-lable">Area</label>
                                        <select>
                                            <option selected>All</option>
                                            <option>Colombo</option>
                                            <option>Gampala</option>
                                            <option>Kaluthara</option>
                                            <option>Yakkala</option>
                                        </select>
                                        <button className="seller-search-buyer-btn" type="submit">Search</button>
                                    </form>
                                </div>
           
                            </div>
           
                            <div className="buyer-list">
                                <div className="buyer-list-header">
                                    <h2>Top Rated Buyers</h2>
                                </div>
                                <div className="buyer-row">
                                    <div className="buyer-column">
                                        <div className="buyer-card">
                                            <img src={buypic} alt="logo" />
                                            <h1>Lk Collectors</h1>
                                            <p>We are collecting plastic and plastic related items.</p>
                                            <h4>Rathings</h4>
                                            <div className="ratings-star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                            <button className="view-more-btn" onClick={viewbuyer}>View More</button>
                                            <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                                        </div>
                    
                                    </div>
                                    <div className="buyer-column">
                                        <div className="buyer-card">
                                            <img src={buypic} alt="logo" />
                                            <h1>Lk Collectors</h1>
                                            <p>We are collecting plastic and plastic related items.</p>
                                            <h4>Rathings</h4>
                                            <div className="ratings-star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                            <button className="view-more-btn" onClick={viewbuyer}>View More</button>
                                            <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                                        </div>
                    
                                    </div>
                                    <div className="buyer-column">
                                        <div className="buyer-card">
                                            <img src={buypic} alt="logo" />
                                            <h1>Lk Collectors</h1>
                                            <p>We are collecting plastic and plastic related items.</p>
                                            <h4>Rathings</h4>
                                            <div className="ratings-star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                            <button className="view-more-btn" onClick={viewbuyer}>View More</button>
                                            <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                                        </div>
                    
                                    </div>
                                    <div className="buyer-column">
                                        <div className="buyer-card">
                                            <img src={buypic} alt="logo" />
                                            <h1>Lk Collectors</h1>
                                            <p>We are collecting plastic and plastic related items.</p>
                                            <h4>Rathings</h4>
                                            <div className="ratings-star">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                            <button className="view-more-btn" onClick={viewbuyer}>View More</button>
                                            <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                                        </div>
                    
                                    </div>
                
                
                                </div>
                            </div>
                            <div className="buyer-list">
                                <div className="buyer-list-header">
                                    <h2>All Buyers List</h2>
                                </div>
                                <div className="all-buyers-list-area">
                                    <table className="seller-offer-table">
                                        <tr>
                                            <th>#</th>
                                            <th>Buyer</th>
                                            <th>Description</th>
                                            <th>Address</th>
                                            <th>contact</th>
                                            <th>Action</th>
                                        </tr>
                                        {buyers.map((buyer, index) => {
                                            if (buyer.buyerId)
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{buyer.buyerName}</td>
                                                        <td>{buyer.buyerDescription}</td>
                                                        <td>{buyer.buyerAddress}</td>
                                                        <td>
                                                            <ul>
                                                                {buyer && buyer.buyerContact && buyer.buyerContact.map((contact) => {
                                                                    return (
                                                                        <li>{contact}</li>
                                                                    )
                                                                    
                                                                })}
                                                                
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            <Link style={{ textDecoration: 'none'}}
                                                                to={`selelr/directpost`}>Sell Now</Link>
                                                        
                                                                <Link style={{ textDecoration: 'none'}}
                                                                to={`/seller/buyer/${buyer.buyerId}`}>View More</Link>
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
            }
            </>
    )
}