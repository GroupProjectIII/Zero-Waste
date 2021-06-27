import React from "react";
import '../posts/Form.css';

function EditCompanyOfferForms() {

    return(
        <div className="forms">
            <div className="forms__container" >
                <div className="container">
                    <div className="title">Edit Company Pending Offer</div>
                    <div className="content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Waste Type</span>
                                    <input type="text" placeholder="Enter type" required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Waste Item</span>
                                    <input type="text" placeholder="Enter item" required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Offer Value</span>
                                    <input type="text" placeholder="Enter value" required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Expiry Date</span>
                                    <input type="date" placeholder="Enter date" required></input>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Edit Offer"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCompanyOfferForms;