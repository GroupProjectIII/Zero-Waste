import React, {useEffect, useState} from "react";
import '../posts/Posts.css';
import axios from 'axios';

function VProfile() {

    const buyerId=(localStorage.getItem("userId"));
    console.log(buyerId);

    const [buyer, setBuyer] = useState({});

    useEffect(()=>{
        getOneSellerOrCompany();
    }, []);

    const getOneSellerOrCompany = async () => {
        try {
            const response = await axios.get(`/getOneSellerOrCompany/${buyerId}`)
            console.log(response);
            const oneSellerOrCompany=response.data.oneSellerOrCompany;
            setBuyer(oneSellerOrCompany);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(buyer);
    const buyerEmail=buyer.email;
    const buyerName=buyer.username;
    console.log(buyerEmail);
    console.log(buyerName);

    const [buyerDetails, setBuyerDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`/getBuyerDetails`)
            .then((response) => setBuyerDetails(response.data.existingBuyers))
            .catch((err) => console.error(err));
    }, []);

    console.log(buyerDetails);

    const oneBuyer = buyerDetails.filter(oneBuyer => oneBuyer.buyerId === buyerId);
    console.log(oneBuyer);

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Profile Details</h1>
                <div className="seller-container-b">
                    {oneBuyer.map((post,index)=> (
                    <ol className="list">
                        <li ><span>Buyer Name: {buyerName}</span></li>
                        <li ><span>Address: {post.buyerAddress}</span></li>
                        <li ><span>Email: {buyerEmail}</span></li>
                        <li ><span>Mobile No: 0711409911</span></li>
                        <li ><span>Favourite Areas: {post.favouriteAreas}</span></li>
                        <li ><span>Favourite Waste Types: {post.favouriteWasteTypes}</span></li>
                        <li ><span>Favourite Waste Items: {post.favouriteWasteItems}</span></li>
                    </ol>
                    ))}
                </div>
                <div className="all-items-button-b">
                    <button >Edit Profile<i className="fas fa-angle-double-right"></i></button>
                    <button >Delete Profile<i className="fas fa-angle-double-right"></i></button>
                </div>
            </div>
        </div>

    );
}

export default VProfile;