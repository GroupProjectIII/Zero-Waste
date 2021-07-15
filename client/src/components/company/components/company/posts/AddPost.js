import React from "react";
import './Form.css';

function AddPost() {
    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                    <div className="content-b">
                        <div className="title-b">Add New Post</div>
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
                                    <span className="details-b">Quantity</span>
                                    <input type="text" placeholder="Enter quantity" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="date-b">Date</span>
                                    <input type="date" placeholder="Enter date" required></input>
                                </div>
                                <div className="input-box-b">
                                    <span className="description-b">Description</span>
                                    <textarea id="w3review" name="w3review"></textarea>
                                </div>
                            </div>
                            <div className="button-b">
                                <input type="submit" value="Add Post"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;