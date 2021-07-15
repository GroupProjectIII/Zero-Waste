import React from "react";
import './VProfile.css';
import '../posts/AcceptedOffers.css';

function VProfile() {

    return(
        <div className="tables-b">
        <div className="vprofile">
            <div className="wrapper1">

                <div className="left">
                    <img src="../images/cv.jpg" alt="user" width="100"></img>
                    <h4>Sandarekha Nuwanmali</h4>
                    <p>Buyer</p>
                    <div className="btn">Edit Profile</div>
                </div> 

                <div className="right">
                    <div className="info">
                        <h3>Information</h3>
                        <div className="info_data">
                            <div className="data">
                                <h4>Full Name</h4>
                                <p>Sandarekha Nuwanmali Dissanayake</p>
                            </div>
                            <div className="data">
                                <h4>Email</h4>
                                <p>sandarekha97@gmail.com</p>
                            </div>
                            <div className="data">
                                <h4>Phone</h4>
                                <p>0703968953</p>
                            </div>
                            <div className="data">
                                <h4>Address</h4>
                                <p>No 149, Near the Church, Katharagama Rd, Buttala</p>
                            </div>
                            <div className="data">
                                <h4>Waste Collecting Area</h4>
                                <p>Monaragala</p>
                            </div>
                            <div className="data">
                                <h4>Working Hours</h4>
                                <p>From 8.00 a.m to 5.00 p.m</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>       
        </div>
        </div>

    );
}

export default VProfile;