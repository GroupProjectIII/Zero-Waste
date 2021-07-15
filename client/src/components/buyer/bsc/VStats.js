import React from "react";
import './VStats.css';
import '../posts/AcceptedOffers.css';

function VStats() {

    return(
        <div className="viewstats">
            <div className="cards">
                <div className="card-single">
                    <h1>⌛54</h1>
                    <span>Pending Offers</span>
                </div>
                <div>
                    <span className="las la-users"></span>
                </div>
                <div className="card-single">
                    <h1>✅24</h1>
                    <span>Accepted Offers</span>
                </div>
                <div>
                    <span className="las la-clipboard"></span>
                </div>
                <div className="card-single">
                    <h1>🚮30</h1>
                    <span>Sellers Requests</span>
                </div>
                <div>
                    <span className="las la-shopping-bag"></span>
                </div>
                <div className="card-single">
                    <h1>♻️10</h1>
                    <span>Company Requests</span>
                </div>
                <div>
                    <span className="las la-shopping-wallet"></span>
                </div>
            </div>

           
            <div className="tables">
            <div className="tables__container">
                <h1>Available waste items with quantities</h1>
                <div className="table_responsive">
                    <table>
                        <thead>
                        <tr>
                            <th>Waste ID</th>
                            <th>Image</th>
                            <th>Waste Type</th>
                            <th>Waste Item</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Plastic</td>
                            <td>Bucket</td>
                            <td>20 kg</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td><img src="images/paper.jpg" alt=""></img></td>
                            <td>Paper</td>
                            <td>News Papers</td>
                            <td>50 kg</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Polythene</td>
                            <td>Bags</td>
                            <td>30 kg</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img src="images/plastic.jpg" alt=""></img></td>
                            <td>Plastic</td>
                            <td>Bottles</td>
                            <td>30 kg</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td><img src="images/plastic.jpg" alt=""></img></td>
                            <td>Glass</td>
                            <td>Bottles</td>
                            <td>60 kg</td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td><img src="images/plastic.jpg" alt=""></img></td>
                            <td>Plastic</td>
                            <td>Chairs</td>
                            <td>20 kg</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </div>

    );
}

export default VStats;