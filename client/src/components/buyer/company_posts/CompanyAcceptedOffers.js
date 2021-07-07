import React from "react";
import '../posts/AcceptedOffers.css';

function CompanyAcceptedOffers() {

    return(
        <div className="tables-b">
            <div className="tables__container-b">
                <h1>Company Accepted Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>

                <table className="table-b">
                    <thead>
                    <tr>
                        <th>Offer ID</th>
                        <th>Company Name</th>
                        <th>Waste Type</th>
                        <th>Waste Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Offer ID">01</td>
                        <td data-label="Company Name">ABC</td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bucket</td>
                        <td data-label="Quantity">2 kg</td>
                        <td data-label="Price">Rs 20</td>
                    </tr>

                    <tr>
                        <td data-label="Offer ID">02</td>
                        <td data-label="Company Name">ABC</td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bucket</td>
                        <td data-label="Quantity">2 kg</td>
                        <td data-label="Price">Rs 20</td>
                    </tr>

                    <tr>
                        <td data-label="Offer ID">03</td>
                        <td data-label="Company Name">ABC</td>
                        <td data-label="Waste Type">Paper</td>
                        <td data-label="Waste Item">News Papers</td>
                        <td data-label="Quantity">5 kg</td>
                        <td data-label="Price">Rs 25</td>
                    </tr>

                    <tr>
                        <td data-label="Offer ID">04</td>
                        <td data-label="Company Name">ABC</td>
                        <td data-label="Waste Type">Polythene</td>
                        <td data-label="Waste Item">Bags</td>
                        <td data-label="Quantity">3 kg</td>
                        <td data-label="Price">Rs 20</td>
                    </tr>

                    <tr>
                        <td data-label="Offer ID">05</td>
                        <td data-label="Company Name">ABC</td>
                        <td data-label="Waste Type">Polythene</td>
                        <td data-label="Waste Item">Bags</td>
                        <td data-label="Quantity">3 kg</td>
                        <td data-label="Price">Rs 20</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CompanyAcceptedOffers;