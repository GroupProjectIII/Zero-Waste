import React from "react";
import './Dashboard.css';

function DashB() {
    return(
        <div className="dashboard_body-c">
            <div className="tables-c">
                <div className="tables__container-c">
                    <h1>Dashboard</h1>
                    <h3 className="table_title-c">Collection Summary</h3>
                    <table className="table-c">
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
                                <td data-label="Date">01 Jun 2020</td>
                                <td data-label="Amount">20kg</td>
                                <td data-label="Type">Plastic</td>
                                <td data-label="Price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="Date">01 Jun 2020</td>
                                <td data-label="Amount">20kg</td>
                                <td data-label="Type">Plastic</td>
                                <td data-label="Price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="Date">01 Jun 2020</td>
                                <td data-label="Amount">20kg</td>
                                <td data-label="Type">Plastic</td>
                                <td data-label="Price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="Date">01 Jun 2020</td>
                                <td data-label="Amount">20kg</td>
                                <td data-label="Type">Plastic</td>
                                <td data-label="Price">Rs.100</td>
                            </tr>

                            <tr>
                                <td data-label="Offer ID">01</td>
                                <td data-label="Date">01 Jun 2020</td>
                                <td data-label="Amount">20kg</td>
                                <td data-label="Type">Plastic</td>
                                <td data-label="Price">Rs.100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DashB;




