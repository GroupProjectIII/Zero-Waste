import React from "react";
import './VStats.css';
import '../posts/AcceptedOffers.css';

function VStats() {

    return(
        <div className="tables-b">
        <div className="viewstats">
            <div className="cards-ba">
                <div className="card-single-ba">
                    <h1>⌛54</h1>
                    <span>Pending Offers</span>
                </div>
                <div>
                    <span className="las la-users"></span>
                </div>
                <div className="card-single-ba">
                    <h1>✅24</h1>
                    <span>Accepted Offers</span>
                </div>
                <div>
                    <span className="las la-clipboard"></span>
                </div>
                <div className="card-single-ba">
                    <h1>🚮30</h1>
                    <span>Sellers Requests</span>
                </div>
                <div>
                    <span className="las la-shopping-bag"></span>
                </div>
                <div className="card-single-ba">
                    <h1>♻️10</h1>
                    <span>Company Requests</span>
                </div>
                <div>
                    <span className="las la-shopping-wallet"></span>
                </div>
            </div>

            <div className="tables__container-b">
                <h1>Available waste items with quantities</h1>
                <table className="table-b">
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
                        <td data-label="Waste ID">01</td>
                        <td data-label="Image"><img src="../images/bucket.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bucket</td>
                        <td data-label="Quantity">20</td>
                    </tr>
                    <tr>
                        <td data-label="Waste ID">02</td>
                        <td data-label="Image"><img src="../images/newspapers.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Paper</td>
                        <td data-label="Waste Item">News Papers</td>
                        <td data-label="Quantity">50</td>
                    </tr>
                    <tr>
                        <td data-label="Waste ID">03</td>
                        <td data-label="Image"><img src="../images/pbag.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Polythene</td>
                        <td data-label="Waste Item">Bags</td>
                        <td data-label="Quantity">30</td>
                    </tr>
                    <tr>
                        <td data-label="Waste ID">01</td>
                        <td data-label="Image"><img src="../images/pbottle.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bottles</td>
                        <td data-label="Quantity">30</td>
                    </tr>
                    <tr>
                        <td data-label="Waste ID">04</td>
                        <td data-label="Image"><img src="../images/gbottle.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Glass</td>
                        <td data-label="Waste Item">Bottles</td>
                        <td data-label="Quantity">60</td>
                    </tr>
                    <tr>
                        <td data-label="Waste ID">01</td>
                        <td data-label="Image"><img src="../images/chair.jpg" alt=""></img></td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Chairs</td>
                        <td data-label="Quantity">20</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        </div>

    );
}

export default VStats;