import React from "react";
import './Form.css';

function EditOfferForms() {

    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                    <div className="title-b">Edit Pending Offer</div>
                    <div className="content-b">
                        <form action="#">
                            <div className="user-details-b">
                                <div className="input-box-b">
                                    <span className="details-b">Waste Type</span>
                                    <input type="text" placeholder="Enter type" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Waste Item</span>
                                    <input type="text" placeholder="Enter item" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Offer Value</span>
                                    <input type="text" placeholder="Enter value" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Expiry Date</span>
                                    <input type="date" placeholder="Enter date" required></input>
                                </div>
                            </div>
                            <div className="button-b">
                                <input type="submit" value="Edit Offer"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOfferForms;