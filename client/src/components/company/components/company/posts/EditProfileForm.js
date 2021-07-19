import React from "react";
import './Form.css';

function EditProfileForm() {
    return(
        <div className="forms-c">
            <div className="forms__container-c" >
                <div className="container-c">
                    <div className="title-c">Edit Profile</div>
                    <div className="content-c">
                        <form action="#">
                            <div className="user-details-c">
                                <div className="input-box-c">
                                    <span className="details-c">Company Name</span>
                                    <input type="text" placeholder="Enter name" required></input>
                                </div>
                                <div className="input-box-c">
                                    <span className="details-c">Contact</span>
                                    <input type="text" placeholder="Enter contact" required></input>
                                </div>
                                <div className="input-box-c">
                                    <span className="details-c">Address</span>
                                    <input type="text" placeholder="Enter address" required></input>
                                </div>
                                <div className="input-box-c">
                                    <span className="details-c">Description</span>
                                    <input type="textarea" placeholder="Enter description" required></input>
                                </div>
                            </div>
                            <div className="button-c">
                                <input type="submit" value="Edit Profile"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfileForm;