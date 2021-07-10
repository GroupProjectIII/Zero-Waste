import React from "react";
import './Form.css';

function Forms() {

    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                        <div className="content-b">
                            <h3>Image of Waste Item</h3>
                            <img src="../images/polythene.jpg" alt=""></img>
                            <div className="title-b">Make Offer</div>
                            <form action="#">
                                <div className="user-details-b">
                                    <div className="input-box-b">
                                        <span className="details-b">Offer Value</span>
                                        <input type="text" placeholder="Enter value" required></input>
                                    </div>
                                    <div className="input-box-b">
                                        <span className="details-b">Expiry Date</span>
                                        <input type="date" placeholder="Enter date" required></input>
                                    </div>
                                    <div className="input-box-b">
                                        <span className="details-b">Quantity</span>
                                        <input type="text" placeholder="Enter quantity" required></input>
                                    </div>
                                </div>
                                <div className="button-b">
                                    <input type="submit" value="Send Offer"></input>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Forms;