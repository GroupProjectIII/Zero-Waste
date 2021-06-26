import React from "react";
import './AcceptedOffers.css';

function AcceptedOffers() {

    return(
        <div className="tables">
            <div className="tables__container">
                <h1>Accepted Offers</h1>
                <div className="table_responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Offer ID</th>
                                <th>Image</th>
                                <th>Waste Type</th>
                                <th>Waste Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Plastic</td>
                            <td>Bucket</td>
                            <td>2 kg</td>
                            <td>Rs 20</td>
                            <td>
                              <span className="action_btn">
                                <a href="#">View</a>
                              </span>
                            </td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td><img src="images/paper.jpg" alt=""></img></td>
                            <td>Paper</td>
                            <td>News Papers</td>
                            <td>5 kg</td>
                            <td>Rs 25</td>
                            <td>
                              <span className="action_btn">
                                <a href="#">View</a>
                              </span>
                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Polythene</td>
                            <td>Bags</td>
                            <td>3 kg</td>
                            <td>Rs 20</td>
                            <td>
                              <span className="action_btn">
                                <a href="#">View</a>
                              </span>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td><img src="images/plastic.jpg" alt=""></img></td>
                            <td>Polythene</td>
                            <td>Bags</td>
                            <td>3 kg</td>
                            <td>Rs 20</td>
                            <td>
                              <span className="action_btn">
                                <a href="#">View</a>
                              </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AcceptedOffers;