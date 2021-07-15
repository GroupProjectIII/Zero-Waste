import React from "react";
import '../posts/AcceptedOffers.css';
import {useHistory} from "react-router-dom";

function VNotifications() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/notifyaboutwaste");
    }

    return(
        <div className="tables">
            <div className="tables__container">
                <h1>Notifications</h1>
                <div className="table_responsive">
                    <table>
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
                            <td>7/7/2021</td>
                            <td>6.42 a.m</td>
                            <td>Seller</td>
                            <td>🚮Piyum Udayanga accepted the offer you requested.</td>
                        </tr>
                        <tr>
                            <td>6/7/2021</td>
                            <td>9.03 a.m</td>
                            <td>Company</td>
                            <td>♻️Clean Collect accepted the offer you requested.</td>
                        </tr>
                        <tr>
                            <td>6/7/2021</td>
                            <td>1.45 p.m</td>
                            <td>Seller</td>
                            <td>🚮Tharushi Perera has rate your service.</td>
                        </tr>
                        <tr>
                            <td>5/7/2021</td>
                            <td>7.30 a.m</td>
                            <td>Company</td>
                            <td>♻️Solid Waste Management has commented on your service.</td>
                        </tr>
                        <tr>
                            <td>5/7/2021</td>
                            <td>6.30 a.m</td>
                            <td>Company</td>
                            <td>♻️Clean collect has rated on your service.</td>
                        </tr>
                        <tr>
                            <td>4/7/2021</td>
                            <td>5.30 p.m</td>
                            <td>Seller</td>
                            <td>🚮Sachin Hasaral has request to collect waste.</td>
                        </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default VNotifications;