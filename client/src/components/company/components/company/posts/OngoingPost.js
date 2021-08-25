import React, {useEffect, useState} from 'react';
import './Posts.css';
import axios from "axios";
import moment from "moment";

function OngoingPost() {

    const companyId=(localStorage.getItem("userId"));
    console.log(companyId);

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await axios.get(`/getCompanyPostsForCompany`)
            .then ((response)=>{
                const allNotes=response.data.existingPosts;
                setNotes(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(notes);

    const [offers, setOffers] = useState([]);

    useEffect(()=>{
        getAllOffers();
    }, []);

    const getAllOffers = async () => {
        await axios.get(`/viewPendingCompanyOffersForCompany`)
            .then ((response)=>{
                const allNotes=response.data.existingOffers;
                setOffers(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(offers);

    const wasteItem = offers?.filter(wasteItem => wasteItem.status==='pending' && wasteItem.companyId===companyId);
    console.log(wasteItem);

    return(
        <div className="posts-c">
            <div className="posts__container-c">
                <div className="title-c"><h1>Ongoing Post</h1></div>
                <main className="grid-c">
                    {notes.map((note,index)=> {
                        if(wasteItem.find(o=>o.postId === note._id) !== undefined)
                            return (
                            <article>
                                    <div className="text-c">
                                        <h3>Post ID: {index + 1}</h3>
                                        <p>Waste Type: {note.wasteType}</p>
                                        <p>Waste Item: {note.item}</p>
                                        <p>Quantity: {note.quantity}</p>
                                        <p>Available Date: {moment(note.avbDate).fromNow()}</p>
                                        <button >View Offers <i className="fas fa-angle-double-right"></i></button>
                                    </div>
                            </article>
                    );
                    })}
                </main>
            </div>
        </div>
    );
}

export default OngoingPost;