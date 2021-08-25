import React, { useEffect,useState } from "react";
import "./Modal.css";
import './AcceptedOffers.css';
import axios from "axios";
import {Link} from "react-router-dom";

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

  const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await axios.get(`/getdirectPFromBuyer`)
            .then ((response)=>{
                const allNotes=response.data.existingPosts;
                setNotes(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(notes);

    const filterData = (postsPara, searchKey) => {
        const result = postsPara.filter(
            (notes) =>
                notes?.buyer.toLowerCase().includes(searchKey) ||
                notes?.wasteType.toLowerCase().includes(searchKey) ||
                notes?.wasteItem.toLowerCase().includes(searchKey) ||
                notes?.date.toLowerCase().includes(searchKey) ||
                notes?.quantity.toString().toLowerCase().includes(searchKey)                 
        );
        setNotes(result);
    };

    const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get(`/getdirectPFromBuyer`).then((res) => {
            if (res?.data?.success) {
                filterData(res?.data?.existingPosts, searchKey);
            }
        });
    };

  return(
    <>
      <div className="tables-c">
        <div className="tables__container-c">
          <h1>Direct Offers</h1>
            <div className="search_box-c">
                <input type="text" placeholder="What are you looking for?" onChange={handleSearchArea}></input>
                <i className="fas fa-search"></i>
            </div>
            <table className="table-c">
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
                {notes.map((note,index)=> (
                  <tr>
                    <td data-label="Offer ID">{index + 1}</td>
                    <td data-label="Buyer"><u><button onClick={toggleModal} className="btn-modal-c">{note.buyerId}</button></u></td>
                    <td data-label="Image"><img src="../../images/polythene.jpg" alt=""></img></td>
                    <td data-label="Waste Type">{note.wasteType}</td>
                    <td data-label="Waste Item">{note.wasteItem}</td>
                    <td data-label="Date">{note.date}</td>
                    <td data-label="Quantity">{note.quantity}</td>
                    <td data-label="Action">
                      <span className="action_btn-c">
                        <a href="#" >Accept</a>
                        <a href="#">Reject</a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {modal && (
          <div className="modal">
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Providentperferendis suscipit officia recusandae.</p>
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

export default DirectP;