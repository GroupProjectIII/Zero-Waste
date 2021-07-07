import React from "react";
import './Posts.css';
import { useHistory } from "react-router-dom";

function Posts() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/viewpostdetails");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
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
                <main className="grid-b">
                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                            <div className="text-b">
                                <h3>Polythene - පොලිතින්</h3>
                                <p>Post ID: 1</p>
                                <p>Location: Buthpitiya</p>
                                <p>Quantity: 1 kg</p>
                                <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                            </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                            <div className="text-b">
                                <h3>Plastic - ප්ලාස්ටික්</h3>
                                <p>Post ID: 2</p>
                                <p>Location: Miriswatta</p>
                                <p>Quantity: 2 kg</p>
                                <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                            </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                            <div className="text-b">
                                <h3>Paper - කඩදාසි</h3>
                                <p>Post ID: 3</p>
                                <p>Location: Gampaha</p>
                                <p>Quantity: 1 kg</p>
                                <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                            </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Post ID: 4</p>
                            <p>Location: Yagoda</p>
                            <p>Quantity: 1 kg</p>
                            <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Post ID: 5</p>
                            <p>Location: Yakkala</p>
                            <p>Quantity: 5 kg</p>
                            <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Post ID: 6</p>
                            <p>Location: Kadawatha</p>
                            <p>Quantity: 4 kg</p>
                            <button onClick={handleRoute}>View Post <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                </main>
            </div>
        </div>


    );
}

export default Posts;