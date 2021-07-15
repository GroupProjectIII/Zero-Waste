import React from "react";
import '../posts/AcceptedOffers.css';


function VNotifications() {

    return(
        <div className="tables-b">
        <div className="tables__container-b">
            <h1>Notifications</h1>
            <table className="table-b">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Seller/Company</th>
                    <th>Notification</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td data-label="Date">7/7/2021</td>
                    <td data-label="Time">6.42 a.m</td>
                    <td data-label="Seller/Company">Seller</td>
                    <td data-label="Notification">🚮Piyum Udayanga accepted the offer you requested.</td>
                </tr>

                <tr>
                    <td data-label="Date">6/7/2021</td>
                    <td data-label="Time">9.03 a.m</td>
                    <td data-label="Seller/Company">Company</td>
                    <td data-label="Notification">♻️Clean Collect accepted the offer you requested.</td>
                </tr>

                <tr>
                    <td data-label="Date">6/7/2021</td>
                    <td data-label="Time">1.45 p.m</td>
                    <td data-label="Seller/Company">Seller</td>
                    <td data-label="Notification">🚮Tharushi Perera has rate your service.</td>
                </tr>

                <tr>
                    <td data-label="Date">5/7/2021</td>
                    <td data-label="Time">7.30 a.m</td>
                    <td data-label="Seller/Company">Company</td>
                    <td data-label="Notification">♻️Solid Waste Management has commented on your service.</td>
                </tr>

                <tr>
                    <td data-label="Date">5/7/2021</td>
                    <td data-label="Time">6.30 a.m</td>
                    <td data-label="Seller/Company">Company</td>
                    <td data-label="Notification">♻️Clean collect has rated on your service.</td>
                </tr>
                <tr>
                    <td data-label="Date">4/7/2021</td>
                    <td data-label="Time">5.30 p.m</td>
                    <td data-label="Seller/Company">Seller</td>
                    <td data-label="Notification">🚮Sachin Hasaral has request to collect waste.</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default VNotifications;