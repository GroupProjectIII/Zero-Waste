import React from "react";
import '../posts/Form.css';

function AComplaints() {

    return(
    <div className="forms-b">
        <div className="forms__container-b" >
            <div className="container-b">
                <div className="title-b">Add Complaints</div>
                <div className="content-b">
                    <form className="buyer-form-b" action="#">
                        <div className="user-details-b">
                            <div className="input-box-b">
                                <span className="details-b">Complainant's Name</span>
                                <input type="text" placeholder="Enter Name" required></input>
                            </div>
                            <div className="input-box-b">
                                <span className="details-b">Email</span>
                                <input type="text" placeholder="Enter Email" required></input>
                            </div>
                            <div className="input-box-b">
                                <span className="details-b">Name of the company/person to complain:</span>
                                <input type="text" placeholder="Enter Details" required></input>
                            </div>
                            <div className="input-box-b">
                                <span className="details-b">Complainant Details</span>
                                <input type="text" placeholder="Enter Details" required></input>
                            </div>
                        </div>
                        <div className="button-b">
                            <input type="submit" value="Add Complaint"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    );
}

export default AComplaints;