import React from "react";
import '../posts/AcceptedOffers.css';
import {useHistory} from "react-router-dom";

function ViewCompany() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/notifyaboutwaste");
    }

    return(
        <div className="tables">
            <div className="tables__container">
                <h1>Company Details</h1>
                <div className="table_responsive">
                    <table>
                        <thead>
                        <tr>
                            <th>Company ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>01</td>
                            <td>ABC Company LTD</td>
                            <td>0112333334</td>
                            <td>
                              <span className="action_btn">
                                <a href="#" onClick={handleRoute}>Notify</a>
                              </span>
                            </td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>CDE Company LTD</td>
                            <td>0112333335</td>
                            <td>
                              <span className="action_btn">
                                <a href="#" onClick={handleRoute}>Notify</a>
                              </span>
                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>FGH Company LTD</td>
                            <td>0112333336</td>
                            <td>
                              <span className="action_btn">
                                <a href="#" onClick={handleRoute}>Notify</a>
                              </span>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>JKL Company LTD</td>
                            <td>0112333337</td>
                            <td>
                              <span className="action_btn">
                                <a href="#" onClick={handleRoute}>Notify</a>
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

export default ViewCompany;