import React from "react";
import '../posts/Posts.css';
import { useHistory } from "react-router-dom";

function CPosts() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/companyofferforms");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <div className="search-box-shadow-b">
                    <div className="search-bar-box-b">
                        <div className="post-search-box-b">
                            <input type="text" placeholder="What are you looking for?"></input>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="search-button-b">
                            <input type="submit" value="Search"></input>
                        </div>
                    </div>
                    <div className="search-bar-b">
                        <div className="box-b">
                            <h3>Waste Type</h3>
                            <select>
                                <option>All</option>
                                <option>Polythene</option>
                                <option>Plastic</option>
                                <option>Organic Waste</option>
                                <option>Paper</option>
                                <option>Metal</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Waste Item</h3>
                            <select>
                                <option>All</option>
                                <option>Bag</option>
                                <option>Bucket</option>
                                <option>Plate</option>
                                <option>Paper</option>
                                <option>Chair</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Quantity</h3>
                            <select>
                                <option>All</option>
                                <option>1 kg</option>
                                <option>2 kg</option>
                                <option>3 kg</option>
                                <option>4 kg</option>
                                <option>5 kg</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Location</h3>
                            <select>
                                <option>All</option>
                                <option>Gampaha</option>
                                <option>Miriswatte</option>
                                <option>Kadawatha</option>
                                <option>Imbulgoda</option>
                                <option>Yakkala</option>
                            </select>
                        </div>
                    </div>
                </div>
                <main className="grid-b">
                    <article>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Buthpitiya</p>
                            <p>Quantity: 100 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 2</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Miriswatta</p>
                            <p>Quantity: 20 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 3</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Gampaha</p>
                            <p>Quantity: 10 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 4</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yagoda</p>
                            <p>Quantity: 100 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 20</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Yakkala</p>
                            <p>Quantity: 50 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Post ID: 17</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Company Name: ABC Pvt LTD</p>
                            <p>Location: Kadawatha</p>
                            <p>Quantity: 4 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                </main>
            </div>
        </div>


    );
}

export default CPosts;