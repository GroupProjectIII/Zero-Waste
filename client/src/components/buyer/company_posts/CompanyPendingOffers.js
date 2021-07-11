import React from "react";
import '../posts/Posts.css';
import {useHistory} from "react-router-dom";

function CompanyPendingOffers() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/editcompanypendingoffers");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Company Pending Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <main className="grid-b">
                    <article>
                        <div className="text-b">
                            <h3>Post ID: 12</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Buthpitiya</p>
                            <p>Quantity: 100 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 21</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Miriswatta</p>
                            <p>Quantity: 20 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 34</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Gampaha</p>
                            <p>Quantity: 10 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 42</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yagoda</p>
                            <p>Quantity: 100 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 52</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yakkala</p>
                            <p>Quantity: 50 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                            <button onClick={handleRoute}>Edit Offer <i className="fas fa-edit"></i></button>
                            <div className="delete-button-b">
                                <button >Delete Offer <i className="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 60</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Kadawatha</p>
                            <p>Quantity: 4 kg</p>
                            <p>Unit Price: Rs. 1000</p>
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

export default CompanyPendingOffers;