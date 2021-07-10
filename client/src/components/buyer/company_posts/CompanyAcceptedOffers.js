import React from "react";
import '../posts/Posts.css';

function CompanyAcceptedOffers() {

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Company Accepted Offers</h1>
                <div className="search_box-b">
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <main className="grid-b">
                    <article>
                        <div className="text-b">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Post ID: 12</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Buthpitiya</p>
                            <p>Quantity: 100 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Post ID: 21</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Miriswatta</p>
                            <p>Quantity: 20 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Post ID: 34</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Gampaha</p>
                            <p>Quantity: 10 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Post ID: 42</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yagoda</p>
                            <p>Quantity: 100 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Post ID: 54</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yakkala</p>
                            <p>Quantity: 50 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Post ID: 60</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Kadawatha</p>
                            <p>Quantity: 4 kg</p>
                            <p>Unit Price: Rs. 1000</p>
                        </div>
                    </article>

                </main>
            </div>
        </div>
    );
}

export default CompanyAcceptedOffers;