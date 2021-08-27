import './AcceptedOffers.css';
import React, {useEffect, useState} from "react";
import "./Modal.css";
import axios from "axios";
import moment from "moment";
import {useParams} from "react-router-dom";

function ViewAcceptedOfferPage() {

    const companyId=(localStorage.getItem("userId"));
    console.log(companyId);

    const { postId } = useParams();
    console.log(postId);

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

    const wasteItem = offers?.filter(
        wasteItem => wasteItem.status==='accepted' &&
            wasteItem.companyId===companyId &&
            wasteItem.postId===postId
    );
    console.log(wasteItem);

    const selId = {companyId};

    return(
        <>
            <div className="tables-c">
                <div className="tables__container-c">
                    <h1>Accepted Offer Details</h1>
                    <table className="table-c">
                        <thead>
                        <tr>
                            <th>Offer ID</th>
                            <th>Buyer Name</th>
                            <th>Collecting Date</th>
                            <th>Expiry Date</th>
                            <th>Quantity (Kg)</th>
                            <th>Value (Rs)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {wasteItem.map((note,index)=> (
                            <tr>
                                <td data-label="Offer ID">{index + 1}</td>
                                <td data-label="Buyer Name">{note.buyerName}</td>
                                <td data-label="Collecting Date">{moment(note.collectingDate).fromNow()}</td>
                                <td data-label="Expiry Date">{moment(note.expiryDate).fromNow()}</td>
                                <td data-label="Quantity (Kg)">{note.quantity}</td>
                                <td data-label="Value (Rs)">{note.value}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ViewAcceptedOfferPage;