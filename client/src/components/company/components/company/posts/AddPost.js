import React from "react";
import './Form.css';


function AddPost() {
    return(
        <div className="addpost_container-c">
            <div className="forms-c">
                <div className="forms__container-c" >
                    <div className="container-c">
                        <div className="content-c">
                            <div className="title-c">Add New Post</div>
                            <form action="#">
                                <div className="user-details-c">
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Type</span>
                                        <input type="text" placeholder="Enter type" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Item</span>
                                        <input type="text" placeholder="Enter item" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Quantity</span>
                                        <input type="text" placeholder="Enter quantity" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="date-c">Date</span>
                                        <input type="date" placeholder="Enter date" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="description-c">Description</span>
                                        <textarea id="w3review" name="w3review"></textarea>
                                    </div>
                                </div>
                                <div className="button-c">
                                    <input type="submit" value="Add Post"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default AddPost;