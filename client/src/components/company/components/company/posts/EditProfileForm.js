import React from "react";
import './Form.css';

function EditProfileForm() {
    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                    <div className="title-b">Edit Profile</div>
                    <div className="content-b">
                        <form action="#">
                            <div className="user-details-b">
                                <div className="input-box-b">
                                    <span className="details-b">Company Name</span>
                                    <input type="text" placeholder="Enter name" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Contact</span>
                                    <input type="text" placeholder="Enter contact" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Address</span>
                                    <input type="text" placeholder="Enter address" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Description</span>
                                    <input type="textarea" placeholder="Enter description" required></input>
                                </div>
                            </div>
                            <div className="button-b">
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