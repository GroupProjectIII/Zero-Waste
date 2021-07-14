import React from "react";
import './Dashboard.css';

function DashB() {
    return(
        <div className="dashboard_body">
            <div className="tables-b">
                <div className="tables__container-b">
                    <h1>Dashboard</h1>
                    <h3 className="table_title">Collection Summary</h3>
                    <table className="table-b">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="date">01 Jun 2020</td>
                                <td data-label="amount">20kg</td>
                                <td data-label="type">Plastic</td>
                                <td data-label="price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="date">01 Jun 2020</td>
                                <td data-label="amount">20kg</td>
                                <td data-label="type">Plastic</td>
                                <td data-label="price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="date">01 Jun 2020</td>
                                <td data-label="amount">20kg</td>
                                <td data-label="type">Plastic</td>
                                <td data-label="price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="date">01 Jun 2020</td>
                                <td data-label="amount">20kg</td>
                                <td data-label="type">Plastic</td>
                                <td data-label="price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="date">01 Jun 2020</td>
                                <td data-label="amount">20kg</td>
                                <td data-label="type">Plastic</td>
                                <td data-label="price">Rs.100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashB;




