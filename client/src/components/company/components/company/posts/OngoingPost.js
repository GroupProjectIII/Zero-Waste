import React from "react";
import { useHistory } from "react-router-dom";

function OngoingPost() {
    
    const history = useHistory();

    const handleRoute = () =>{
        history.push("/company/offersforposts");
    }

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <div className="title-b">Ongoing Post</div>
                <main className="grid-b">
                    <article>
                        <div className="text-b">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 1 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>Only shopping bags are required</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 2 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>C;ear plastic bottles are prefered</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 1 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>Good quality is a plus</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Paper - කඩදාසි</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 1 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>Only white paper are required</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Plastic - ප්ලාස්ටික්</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 5 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>nklfe  gnlegnl egknrkl</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <div className="text-b">
                            <h3>Polythene - පොලිතින්</h3>
                            <p>Waste Type: Bags</p>
                            <p>Quantity: 4 kg</p>
                            <p>Date: 12 Jun 2020</p>
                            <p>bejk ioivt ijegio</p>
                            <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    );
}

export default OngoingPost;