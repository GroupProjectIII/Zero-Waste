import React from "react";
import '../posts/AcceptedOffers.css';
import {useHistory} from "react-router-dom";

function ViewCompany() {

    const history = useHistory();

    const handleRoute = () =>{
        history.push("/notifyaboutwaste");
    }

    return(
    <div className="tables-b">
        <div className="tables__container-b">
            <h1>Company Offers</h1>
            <div className="search_box-b">
                <input type="text" placeholder="What are you looking for?"></input>
                <i className="fas fa-search"></i>
            </div>

            <table className="table-b">
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
                    <td data-label="Company ID">04</td>
                    <td data-label="Name">JKL Company LTD</td>
                    <td data-label="Phone">0112333337</td>
                    <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Notify</a>
                          </span>
                    </td>
                </tr>

                <tr>
                    <td data-label="Company ID">04</td>
                    <td data-label="Name">JKL Company LTD</td>
                    <td data-label="Phone">0112333337</td>
                    <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Notify</a>
                          </span>
                    </td>
                </tr>

                <tr>
                    <td data-label="Company ID">04</td>
                    <td data-label="Name">JKL Company LTD</td>
                    <td data-label="Phone">0112333337</td>
                    <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Notify</a>
                          </span>
                    </td>
                </tr>

                <tr>
                    <td data-label="Company ID">04</td>
                    <td data-label="Name">JKL Company LTD</td>
                    <td data-label="Phone">0112333337</td>
                    <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Notify</a>
                          </span>
                    </td>
                </tr>

                <tr>
                    <td data-label="Company ID">04</td>
                    <td data-label="Name">JKL Company LTD</td>
                    <td data-label="Phone">0112333337</td>
                    <td data-label="Action">
                          <span className="action_btn-b">
                            <a href="#" onClick={handleRoute}>Notify</a>
                          </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default ViewCompany;