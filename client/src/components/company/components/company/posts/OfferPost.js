import './AcceptedOffers.css';
import React, { useState } from "react";
import "./Modal.css";


function OfferPost() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return(
    <>
      <div className="tables-c">
        <div className="tables__container-c">
          <h1>Offers</h1>
          <table className="table-c">
            <thead>
              <tr>
                  <th>Offer ID</th>
                  <th>Collector</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Offer ID">01</td>
                <td data-label="Collector"><u><button onClick={toggleModal} className="btn-modal-c">Tom</button></u></td>
                <td data-label="Date">2020 July 07</td>
                <td data-label="Quantity">2 kg</td>
                <td data-label="Price">Rs 20</td>
                <td data-label="Action">
                  <span className="action_btn-c">
                    <a href="#" >Accept</a>
                    <a href="#">Reject</a>
                  </span>
                </td>
              </tr>

              <tr>
                <td data-label="Offer ID">02</td>
                <td data-label="Collector"><u><button onClick={toggleModal} className="btn-modal-c">Tom</button></u></td>
                <td data-label="Date">2020 July 07</td>
                <td data-label="Quantity">2 kg</td>
                <td data-label="Price">Rs 20</td>
                <td data-label="Action">
                  <span className="action_btn-c">
                    <a href="#" >Accept</a>
                    <a href="#">Reject</a>
                  </span>
                </td>
              </tr>

              <tr>
                <td data-label="Offer ID">03</td>
                <td data-label="Collector"><u><button onClick={toggleModal} className="btn-modal-c">Tom</button></u></td>
                <td data-label="Date">2020 July 07</td>
                <td data-label="Quantity">5 kg</td>
                <td data-label="Price">Rs 25</td>
                <td data-label="Action">
                  <span className="action_btn-c">
                    <a href="#" >Accept</a>
                    <a href="#">Reject</a>
                  </span>
                </td>
              </tr>

              <tr>
                <td data-label="Offer ID">04</td>
                <td data-label="Collector"><u><button onClick={toggleModal} className="btn-modal-c">Tom</button></u></td>
                <td data-label="Date">2020 July 07</td>
                <td data-label="Quantity">3 kg</td>
                <td data-label="Price">Rs 20</td>
                <td data-label="Action">
                  <span className="action_btn-c">
                    <a href="#" >Accept</a>
                    <a href="#">Reject</a>
                  </span>
                </td>
              </tr>

              <tr>
                <td data-label="Offer ID">05</td>
                <td data-label="Collector"><u><button onClick={toggleModal} className="btn-modal-c">Tom</button></u></td>
                <td data-label="Date">2020 July 07</td>
                <td data-label="Quantity">3 kg</td>
                <td data-label="Price">Rs 20</td>
                <td data-label="Action">
                  <span className="action_btn-c">
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
        <div className="modal-c">
          <div onClick={toggleModal} className="overlay-c"></div>
          <div className="modal-content-c">
            <div className="contact-c">
              <img src="../../images/polythene.jpg" alt="" className="profileimage-c"></img>
              <h1>Tom Harrison</h1><br></br>
              <h2 >Email: th@gmail.com</h2><br></br>
              <h2>Contact: 011-1111111</h2>
            </div>
            <div className="detail-c">
              <label>Collecting Area: </label><h2>Colombo</h2><br></br>
              <label>Address: </label><h2> Reid Aveneu, Colombo 07</h2><br></br>
              <label>Working Hours: </label><h2> 8.00 a.m - 5.00 p.m</h2><br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae.</p>
            </div>
            
            <button className="close-modal-c" onClick={toggleModal}>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default OfferPost;