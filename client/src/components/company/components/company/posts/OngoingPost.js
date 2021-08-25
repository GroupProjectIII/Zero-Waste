import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import './Posts.css';

function OngoingPost() {
    const [notes, setNotes] = useState([{
        type: '',
        item: '',
        quantity: '',
        date: '',
        description: ''
    }])

    useEffect(() => {
        fetch("/company/ongoingpost").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })
    
    const history = useHistory();

    const handleRoute = () =>{
        history.push("/company/offersforposts");
    }

    return(
        <div className="posts-c">
            <div className="posts__container-c">
                <div className="title-c"><h1>Ongoing Post</h1></div>
                <main className="grid-c">
                    <article>
                        {notes.map(note => 
                            <div className="text-c">
                                <h3>{note.type}</h3>
                                <p>Waste Type: {note.item}</p>
                                <p>Quantity: {note.quantity}</p>
                                <p>Date: {note.date}</p>
                                <p>{note.description}</p>
                                <button onClick={handleRoute}>View Offers <i className="fas fa-angle-double-right"></i></button>
                            </div>
                        )}
                    </article>
                </main>
            </div>
        </div>
    );
}

export default OngoingPost;