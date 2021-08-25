import React, {useEffect, useState} from "react";
import './Posts.css';
import axios from "axios";
import moment from "moment";

function PreviousPost() {

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

    const wasteItem = notes?.filter(wasteItem => wasteItem.companyId===companyId);
    console.log(wasteItem);

    return(
        <div className="posts-c">
            <div className="posts__container-c">
                <div className="title-c"><h1>All Post</h1></div>
                <main className="grid-c">
                    {wasteItem.map((note,index)=> (
                        <article>
                            <div className="text-c">
                                <h3>Post ID: {index + 1}</h3>
                                <p>Waste Type: {note.wasteType}</p>
                                <p>Waste Item: {note.item}</p>
                                <p>Quantity: {note.quantity}</p>
                                <p>Available Date: {moment(note.avbDate).fromNow()}</p>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </div>
    );
}

export default PreviousPost;