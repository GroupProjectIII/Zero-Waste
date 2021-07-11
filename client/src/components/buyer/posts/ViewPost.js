import React from "react";
import './Posts.css';
import {useHistory} from "react-router-dom";
import SimpleMap from "./Location";

function ViewPost() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/offerforms");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Post Details</h1>
                <div className="seller-container-b">
                    <ol className="list">
                        <li ><span>Seller Name: Frodo</span></li>
                        <li ><span>Seller Address: Kinigama, Gampaha</span></li>
                        <li ><span>Mobile No: 0711409911</span></li>
                    </ol>
                </div>
                <main className="grid-b">
                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Waste Item: Polythene Roll</p>
                            <p>Quantity: 1 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Waste Item: Bottles</p>
                            <p>Quantity: 2 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Waste Item: Papers</p>
                            <p>Quantity: 1 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>
                </main>
                    <div className="all-items-button-b">
                        <p>Do you want to make an offer for all these items at once?</p>
                        <button onClick={handleRoute}>Make Offer for All Items <i className="fas fa-angle-double-right"></i></button>
                    </div>
            </div>
                <div className="seller-location-b">
                    <SimpleMap/>
                </div>
        </div>
    );
}

export default ViewPost;