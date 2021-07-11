import React from "react";
import './Posts.css';
import {useHistory} from "react-router-dom";

function PendingOffers() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/editpendingoffers");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Pending Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <main className="grid-b">
                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 11</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Waste Item: Polythene Roll</p>
                            <p>Location: Buthpitiya</p>
                            <p>Quantity: 1 kg</p>
                            <p>Unit Price: Rs. 20</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 21</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Waste Item: Bottles</p>
                            <p>Location: Miriswatta</p>
                            <p>Quantity: 2 kg</p>
                            <p>Unit Price: Rs. 20</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 32</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Waste Item: News Papers</p>
                            <p>Location: Gampaha</p>
                            <p>Quantity: 1 kg</p>
                            <p>Unit Price: Rs. 10</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 44</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Waste Item: News Papers</p>
                            <p>Location: Yagoda</p>
                            <p>Quantity: 1 kg</p>
                            <p>Unit Price: Rs. 20</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 45</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Waste Item: Bottles</p>
                            <p>Location: Yakkala</p>
                            <p>Quantity: 5 kg</p>
                            <p>Unit Price: Rs. 50</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 46</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Waste Item: Polythene Roll</p>
                            <p>Location: Kadawatha</p>
                            <p>Quantity: 4 kg</p>
                            <p>Unit Price: Rs. 30</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                </main>
            </div>
        </div>
    );
}

export default PendingOffers;