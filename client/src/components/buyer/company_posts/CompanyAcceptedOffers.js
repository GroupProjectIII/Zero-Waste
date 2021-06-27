import React from "react";
import '../posts/AcceptedOffers.css';

function CompanyAcceptedOffers() {

    return(
        <div className="tables">
            <div className="tables__container">
                <h1>Company Accepted Offers</h1>
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Plastic</td>
                            <td>Bucket</td>
                            <td>20 kg</td>
                            <td>Rs 20</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td><img src="images/paper.jpg" alt=""></img></td>
                            <td>Paper</td>
                            <td>News Papers</td>
                            <td>50 kg</td>
                            <td>Rs 25</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td><img src="images/polythene.jpg" alt=""></img></td>
                            <td>Polythene</td>
                            <td>Bags</td>
                            <td>30 kg</td>
                            <td>Rs 20</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td><img src="images/plastic.jpg" alt=""></img></td>
                            <td>Polythene</td>
                            <td>Bags</td>
                            <td>30 kg</td>
                            <td>Rs 20</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CompanyAcceptedOffers;