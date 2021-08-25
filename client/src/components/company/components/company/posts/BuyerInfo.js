import React, { useEffect,useState } from "react";
import './AcceptedOffers.css';
import {useHistory} from "react-router-dom";
import axios from "axios";

function BuyerInfo() {
    const history = useHistory();

    const handleRoute = () =>{
        history.push("/company/buyerscontact");
    }

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await axios.get(`/buyerViewDetails`)
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

        axios.get(`/buyerViewDetails`).then((res) => {
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
                    <input type="text" placeholder="What are you looking for?"></input>
                    <i className="fas fa-search"></i>
                </div>
                <table className="table-c">
                    <thead>
                        <tr>
                            <th>Buyer ID</th>
                            <th>Buyer</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Collecting Area</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note,index)=> (
                            <tr>
                                <td data-label="Offer ID">{index + 1}</td>
                                <td data-label="Buyer">{note.buyerId}</td>
                                <td data-label="Image"><img src="../../images/{note.buyerImages}.jpg" alt=""></img></td>
                                <td data-label="Waste Type">{note.favouriteWasteTypes}</td>
                                <td data-label="Waste Item">{note.favouriteWasteItems}</td>
                                <td data-label="Area">{note.favouriteAreas}</td>
                                <td data-label="Action">
                                    <span className="action_btn-c">
                                        <a href="#" onClick={handleRoute}>Contact</a>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default BuyerInfo;