import React from "react";
import '../posts/Posts.css';
import {useHistory} from "react-router-dom";

function VProfile() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/editprofile");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Profile Details</h1>
                <div className="seller-container-b">
                    <ol className="list">
                        <li ><span>Seller Name: Frodo</span></li>
                        <li ><span>Address: Kinigama, Gampaha</span></li>
                        <li ><span>Email: frodo@gmail.com</span></li>
                        <li ><span>Mobile No: 0711409911</span></li>
                    </ol>
                </div>
                <div className="all-items-button-b">
                    <button onClick={handleRoute}>Edit Profile<i className="fas fa-angle-double-right"></i></button>
                    <button >Delete Profile<i className="fas fa-angle-double-right"></i></button>
                </div>
            </div>
        </div>

    );
}

export default VProfile;