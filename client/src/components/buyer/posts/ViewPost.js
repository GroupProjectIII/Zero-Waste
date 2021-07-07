import React from "react";
import '../posts/AcceptedOffers.css';
import '../posts/ViewPost.module.css';
import {useHistory} from "react-router-dom";
import SimpleMap from "./Location";

function ViewPost() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/buyer/offerforms");
    }

    return(
        <div className="tables-b">
            <div className="tables__container-b">
                <h1>Post Details</h1>
                <div className="tablebox__container-b">
                    <SimpleMap/>
                <div className="content-posts">
                    <div className="container-table">
                        <table className="data-display">
                            <tr>
                                <td >Post ID: </td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td >Seller Name: </td>
                                <td>ABC</td>
                            </tr>
                            <tr>
                                <td>Seller Address: </td>
                                <td>CDE</td>
                            </tr>
                            <tr>
                                <td>Mobile No: </td>
                                <td>123456789</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <table className="table-b">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Waste Type</th>
                        <th>Waste Item</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="No">04</td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bottle</td>
                        <td data-label="Quantity">1 kg</td>
                        <td data-label="Image"><img src="../images/polythene.jpg" alt=""></img></td>
                        <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Make Offer</a>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="No">04</td>
                        <td data-label="Waste Type">Plastic</td>
                        <td data-label="Waste Item">Bottle</td>
                        <td data-label="Quantity">1 kg</td>
                        <td data-label="Image"><img src="../images/polythene.jpg" alt=""></img></td>
                        <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Make Offer</a>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="No">04</td>
                        <td data-label="Waste Type">Paper</td>
                        <td data-label="Waste Item">Book</td>
                        <td data-label="Quantity">1 kg</td>
                        <td data-label="Image"><img src="../images/polythene.jpg" alt=""></img></td>
                        <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Make Offer</a>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="No">04</td>
                        <td data-label="Waste Type">Paper</td>
                        <td data-label="Waste Item">Book</td>
                        <td data-label="Quantity">1 kg</td>
                        <td data-label="Image"><img src="../images/polythene.jpg" alt=""></img></td>
                        <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Make Offer</a>
                          </span>
                        </td>
                    </tr>

                    <tr>
                        <td data-label="No">04</td>
                        <td data-label="Waste Type">Polythene</td>
                        <td data-label="Waste Item">Bag</td>
                        <td data-label="Quantity">1 kg</td>
                        <td data-label="Image"><img src="../images/polythene.jpg" alt=""></img></td>
                        <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Make Offer</a>
                          </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default ViewPost;