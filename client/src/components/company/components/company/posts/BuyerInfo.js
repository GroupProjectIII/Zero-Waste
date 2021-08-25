import React, { useEffect,useState } from "react";
import './AcceptedOffers.css';
import axios from "axios";

function BuyerInfo() {

    const [buyerDetails, setBuyerDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`/getBuyerDetailsForCompany`)
            .then((response) => setBuyerDetails(response.data.existingBuyers))
            .catch((err) => console.error(err));
    }, []);

    console.log(buyerDetails);

    const filterData = (postsPara, searchKey) => {
        const result = postsPara.filter(
            (buyerDetails) =>
                buyerDetails?.buyerAddress.toLowerCase().includes(searchKey) ||
                buyerDetails?.favouriteWasteTypes?.map(wasteItem => wasteItem.favouriteWasteTypes).join(' ').toLowerCase().includes(searchKey) ||
                buyerDetails?.favouriteWasteItems?.map(wasteItem => wasteItem.favouriteWasteItems).join(' ').toLowerCase().includes(searchKey) ||
                buyerDetails?.favouriteAreas?.map(wasteItem => wasteItem.favouriteAreas).join(' ').toLowerCase().includes(searchKey) ||
                buyerDetails?.buyerContact?.map(wasteItem => wasteItem.buyerContact).join(' ').toLowerCase().includes(searchKey) ||
                buyerDetails?.buyerDescription.toLowerCase().includes(searchKey)
        );
        setBuyerDetails(result);
    };

    const handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get(`/getBuyerDetailsForCompany`).then((res) => {
            if (res?.data?.success) {
                filterData(res?.data?.existingBuyers, searchKey);
            }
        });
    };

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
                <h1>Contact Buyers</h1>
                <div className="search_box-c">
                    <input type="text" placeholder="What are you looking for?" onChange={handleSearchArea}></input>
                    <i className="fas fa-search"></i>
                </div>
                <table className="table-c">
                    <thead>
                        <tr>
                            <th>Buyer ID</th>
                            <th>Waste Type</th>
                            <th>Waste Item</th>
                            <th>Collecting Area</th>
                            <th>Contact No</th>
                            <th>Description</th>
                            <th>Address</th>
                            <th>Buyer Images</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyerDetails.map((note,index)=> (
                            <tr>
                                <td data-label="Offer ID">{index + 1}</td>
                                <td data-label="Waste Type">{note.favouriteWasteTypes}</td>
                                <td data-label="Waste Item">{note.favouriteWasteItems}</td>
                                <td data-label="Collecting Area">{note.favouriteAreas}</td>
                                <td data-label="Contact No">{note.buyerContact}</td>
                                <td data-label="Description">{note.buyerDescription}</td>
                                <td data-label="Address">{note.buyerAddress}</td>
                                <td data-label="Buyer Images"><img src={note.buyerImages}></img></td>
                                <td data-label="Action">
                                    <span className="action_btn-c">
                                        <a href="#">Contact</a>
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