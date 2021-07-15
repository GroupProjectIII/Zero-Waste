import React from "react";
import './AComplaints.css';
import '../posts/AcceptedOffers.css';

function AComplaints() {

    return(
        <div className="tables-b">
        <div className="addcomplaints">

        <h1>Complaints Form</h1>
            <div className="wrapper">
           
                
                <div className="form">
                    <div className="input_field">
                        <label>Date of filling the form</label>
                        <input type="date" class="input"/>
                    </div>
                    <div className="input_field">
                        <label>Complainant's Name</label>
                        <input type="text" class="input"/>
                    </div>
                    <div className="input_field">
                        <label>Email</label>
                        <input type="email" class="input"/>
                    </div>
                    <div className="input_field">
                        <label>Name of the company/person against which/whom the complaint is filed:</label>
                        <input type="text" class="input"/>
                    </div>
                    <div className="input_field">
                        <label>Complainant Details</label>
                        <textarea className="textarea"></textarea>
                    </div>
                    <div className="input_field">
                        <input type="submit" class="btn"/>
                    </div>

                </div>
            </div>
        </div>
        </div>

    );
}

export default AComplaints;