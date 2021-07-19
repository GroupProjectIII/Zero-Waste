import React, { useState } from "react";
import './AcceptedOffers.css';
import {useHistory} from "react-router-dom";

function BuyerInfo() {
    const history = useHistory();

    const handleRoute = () =>{
        history.push("/company/buyerscontact");
    }

    return(
        <>
        <div className="tables-c">
            <div className="tables__container-c">
                <h1>Direct Offers</h1>
                <div className="search_box-c">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <table className="table-c">
                    <thead>
                        <tr>
                            <th>Buyer ID</th>
                            <th>Buyer</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Collecting Area</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Offer ID">01</td>
                            <td data-label="Buyer">Tom</td>
                            <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                            <td data-label="Waste Type">tom@gmail.com</td>
                            <td data-label="Waste Item">011-1111111</td>
                            <td data-label="Date">Colombo</td>
                            <td data-label="Action">
                                <span className="action_btn-c">
                                    <a href="#" onClick={handleRoute}>Contact</a>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Offer ID">02</td>
                            <td data-label="Buyer">Tom</td>
                            <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                            <td data-label="Waste Type">tom@gmail.com</td>
                            <td data-label="Waste Item">011-1111111</td>
                            <td data-label="Date">Colombo</td>
                            <td data-label="Action">
                                <span className="action_btn-c">
                                    <a href="#" onClick={handleRoute}>Contact</a>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Offer ID">03</td>
                            <td data-label="Buyer">Tom</td>
                            <td data-label="Image"><img src="../../images/paper.jpg" alt=""></img></td>
                            <td data-label="Waste Type">tom@gmail.com</td>
                            <td data-label="Waste Item">011-1111111</td>
                            <td data-label="Date">Colombo</td>
                            <td data-label="Action">
                                <span className="action_btn-c">
                                    <a href="#" onClick={handleRoute}>Contact</a>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Offer ID">04</td>
                            <td data-label="Buyer">Tom</td>
                            <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                            <td data-label="Waste Type">tom@gmail.com</td>
                            <td data-label="Waste Item">011-1111111</td>
                            <td data-label="Date">Colombo</td>
                            <td data-label="Action">
                                <span className="action_btn-c">
                                    <a href="#" onClick={handleRoute}>Contact</a>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Offer ID">05</td>
                            <td data-label="Buyer">Tom</td>
                            <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                            <td data-label="Waste Type">tom@gmail.com</td>
                            <td data-label="Waste Item">011-1111111</td>
                            <td data-label="Date">Colombo</td>
                            <td data-label="Action">
                                <span className="action_btn-c">
                                    <a href="#" onClick={handleRoute}>Contact</a>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default BuyerInfo;