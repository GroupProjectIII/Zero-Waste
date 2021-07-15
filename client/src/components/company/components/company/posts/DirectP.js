import React, { useState } from "react";
import "./Modal.css";
import './AcceptedOffers.css';

function DirectP() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  {return(
    <>
      <div className="tables-b">
        <div className="tables__container-b">
          <h1>Direct Offers</h1>
            <div className="search_box-b">
                <input type="text" placeholder="What are you looking for?"></input>
                <i className="fas fa-search"></i>
            </div>
            <table className="table-b">
              <thead>
                <tr>
                    <th>Offer ID</th>
                    <th>Buyer</th>
                    <th>Image</th>
                    <th>Waste Type</th>
                    <th>Waste Item</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Offer ID">01</td>
                  <td><u><button onClick={toggleModal} className="btn-modal">Tom</button></u></td>
                  <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                  <td data-label="Waste Type">Plastic</td>
                  <td data-label="Waste Item">Bucket</td>
                  <td data-label="date">2020 July 07</td>
                  <td data-label="Quantity">2 kg</td>
                  <td data-label="Location">
                    <span className="action_btn-b">
                      <a href="#" >Accept</a>
                      <a href="#">Reject</a>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td data-label="Offer ID">02</td>
                  <td><u><button onClick={toggleModal} className="btn-modal">Tom</button></u></td>
                  <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                  <td data-label="Waste Type">Plastic</td>
                  <td data-label="Waste Item">Bucket</td>
                  <td data-label="date">2020 July 07</td>
                  <td data-label="Quantity">2 kg</td>
                  <td data-label="Location">
                    <span className="action_btn-b">
                      <a href="#" >Accept</a>
                      <a href="#">Reject</a>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td data-label="Offer ID">03</td>
                  <td><u><button onClick={toggleModal} className="btn-modal">Tom</button></u></td>
                  <td data-label="Image"><img src="../../images/paper.jpg" alt=""></img></td>
                  <td data-label="Waste Type">Paper</td>
                  <td data-label="Waste Item">News Papers</td>
                  <td data-label="date">2020 July 07</td>
                  <td data-label="Quantity">5 kg</td>
                  <td data-label="Location">
                    <span className="action_btn-b">
                      <a href="#" >Accept</a>
                      <a href="#">Reject</a>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td data-label="Offer ID">04</td>
                  <td><u><button onClick={toggleModal} className="btn-modal">Tom</button></u></td>
                  <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                  <td data-label="Waste Type">Polythene</td>
                  <td data-label="Waste Item">Bags</td>
                  <td data-label="date">2020 July 07</td>
                  <td data-label="Quantity">3 kg</td>
                  <td data-label="Location">
                    <span className="action_btn-b">
                      <a href="#" >Accept</a>
                      <a href="#">Reject</a>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td data-label="Offer ID">05</td>
                  <td><u><button onClick={toggleModal} className="btn-modal">Tom</button></u></td>
                  <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                  <td data-label="Waste Type">Polythene</td>
                  <td data-label="Waste Item">Bags</td>
                  <td data-label="date">2020 July 07</td>
                  <td data-label="Quantity">3 kg</td>
                  <td data-label="Location">
                    <span className="action_btn-b">
                      <a href="#" >Accept</a>
                      <a href="#">Reject</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div className="contact">
                <img src="../../images/polythene.jpg" alt="" className="profileimage"></img>
                <h1>Tom Harrison</h1><br></br>
                <h2 >Email: th@gmail.com</h2><br></br>
                <h2>Contact: 011-1111111</h2>
              </div>
              <div className="detail">
                <label>Collecting Area: </label><h2>Colombo</h2><br></br>
                <label>Address: </label><h2> Reid Aveneu, Colombo 07</h2><br></br>
                <label>Working Hours: </label><h2> 8.00 a.m - 5.00 p.m</h2><br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentperferendis suscipit officia recusandae.</p>
              </div>
              <button className="close-modal" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
    </>
  );
}}

export default DirectP;