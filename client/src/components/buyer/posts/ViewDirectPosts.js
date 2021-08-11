import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link} from "react-router-dom";
import axios from 'axios';

function ViewDirectPosts() {

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await axios.get(`/buyerPosts`)
            .then ((response)=>{
                const allNotes=response.data.existingPosts;
                setNotes(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(notes);

    const buyerId=(localStorage.getItem("userId"));
    console.log(buyerId);

    const [offers, getOffers] = useState([]);

    useEffect(()=>{
        getAllOffers();
    }, []);

    const getAllOffers = async () => {
        await axios.get(`/viewPendingSellerOffers`)
            .then ((response)=>{
                const allNotes=response.data.existingOffers;
                getOffers(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(offers);

    const wasteItem = offers?.filter(wasteItem => wasteItem.status==='accepted' && wasteItem.wasteItemsListId==='completePost');
    console.log(wasteItem);

    const filterData = (postsPara, searchKey) => {
        const result = postsPara.filter(
            (notes) =>
                notes?.address.toLowerCase().includes(searchKey) ||
                notes?.contact.toString().toLowerCase().includes(searchKey)
        );
        setNotes(result);
    };

    const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get(`/buyerPosts`).then((res) => {
            if (res?.data?.success) {
                filterData(res?.data?.existingPosts, searchKey);
            }
        });
    };

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <div className="search-box-shadow-b">
                    <div className="search-bar-box-b">
                        <div className="post-search-box-b">
                            <input type="text" placeholder="What are you looking for?" onChange={handleSearchArea}></input>
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="search-button-b">
                            <input type="submit" value="Search"></input>
                        </div>
                    </div>
                    <div className="search-bar-b">
                        <div className="box-b">
                            <h3>Waste Type</h3>
                            <select>
                                <option>All</option>
                                <option>Polythene</option>
                                <option>Plastic</option>
                                <option>Organic Waste</option>
                                <option>Paper</option>
                                <option>Metal</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Waste Item</h3>
                            <select>
                                <option>All</option>
                                <option>Bag</option>
                                <option>Bucket</option>
                                <option>Plate</option>
                                <option>Paper</option>
                                <option>Chair</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Quantity</h3>
                            <select>
                                <option>All</option>
                                <option>1 kg</option>
                                <option>2 kg</option>
                                <option>3 kg</option>
                                <option>4 kg</option>
                                <option>5 kg</option>
                            </select>
                        </div>
                        <div className="box-b">
                            <h3>Location</h3>
                            <select onChange={handleSearchArea}>
                                <option disabled selected >All</option>
                                <option value="ampara">Ampara</option>
                                <option value="anuradhapura">Anuradhapura</option>
                                <option value="badulla">Badulla</option>
                                <option value="batticaloa">Batticaloa</option>
                                <option value="colombo">Colombo</option>
                                <option value="galle">Galle</option>
                                <option value="gampaha">Gampaha</option>
                                <option value="hambantota">Hambantota</option>
                                <option value="jaffna">Jaffna</option>
                                <option value="kalutara">Kalutara</option>
                                <option value="kandy">Kandy</option>
                                <option value="kegalle">Kegalle</option>
                                <option value="kilinochchi">Kilinochchi</option>
                                <option value="kurunegala">Kurunegala</option>
                                <option value="mannar">Mannar</option>
                                <option value="matale">Matale</option>
                                <option value="matara">Matara</option>
                                <option value="monaragala">Monaragala</option>
                                <option value="mullaitivu">Mullaitivu</option>
                                <option value="nuwaraeliya">Nuwara Eliya</option>
                                <option value="polonnaruwa">Polonnaruwa</option>
                                <option value="puttalam">Puttalam</option>
                                <option value="ratnapura">Ratnapura</option>
                                <option value="trincomalee">Trincomalee</option>
                                <option value="vavuniya">Vavuniya</option>
                            </select>
                        </div>
                    </div>
                </div>
                <main className="grid-b">
                    {notes.map((note,index)=> {
                        if(wasteItem.find(o=>o.postId === note._id) === undefined && note.postType==='direct' && note.buyer===buyerId)
                            return (
                                <article>
                                    <div className="text-b">
                                        <h3>Post ID: {index + 1}</h3>
                                        <p>Location: {note.address}</p>
                                        <p>Post Type: {note.postType}</p>
                                        <p>Address: {note.address}</p>
                                        <p>Telephone No: {note.contact}</p>
                                        <div className="buyerlink-b">
                                            <Link style={{color: '#fff', textDecoration: 'none'}}
                                                  to={`/buyer/viewpostdetails/${note._id}`}>View Post <i
                                                className="fas fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </article>
                            );
                    })}
                </main>
            </div>
        </div>
    );
}

export default ViewDirectPosts;