import React from "react";
import './Posts.css';
import { useHistory } from "react-router-dom";

function Posts() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/offerforms");
    }

    return(
        <div className="posts">
        <div className="posts__container">
            <main className="grid">
                <article>
                    <img src="images/polythene.jpg" alt=""></img>
                        <div className="text">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Post ID: 1</p>
                            <p>Location: Buthpitiya</p>
                            <p>Quantity: 1 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                </article>

                <article>
                    <img src="images/plastic.jpg" alt=""></img>
                        <div className="text">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Post ID: 2</p>
                            <p>Location: Miriswatta</p>
                            <p>Quantity: 2 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                </article>

                <article>
                    <img src="images/paper.jpg" alt=""></img>
                        <div className="text">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Post ID: 3</p>
                            <p>Location: Gampaha</p>
                            <p>Quantity: 1 kg</p>
                            <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                </article>

                <article>
                    <img src="images/paper.jpg" alt=""></img>
                    <div className="text">
                        <h3>Paper - කඩදාසි</h3>
                        <p>Post ID: 4</p>
                        <p>Location: Yagoda</p>
                        <p>Quantity: 1 kg</p>
                        <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                    </div>
                </article>

                <article>
                    <img src="images/plastic.jpg" alt=""></img>
                    <div className="text">
                        <h3>Plastic - ප්ලාස්ටික්</h3>
                        <p>Post ID: 5</p>
                        <p>Location: Yakkala</p>
                        <p>Quantity: 5 kg</p>
                        <button onClick={handleRoute}>Make Offer <i className="fas fa-angle-double-right"></i></button>
                    </div>
                </article>

                <article>
                    <img src="images/polythene.jpg" alt=""></img>
                    <div className="text">
                        <h3>Polythene - පොලිතින්</h3>
                        <p>Post ID: 6</p>
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

export default Posts;