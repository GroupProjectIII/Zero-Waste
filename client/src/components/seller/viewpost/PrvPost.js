import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import './PendingPosts.css';
import Bottles from './postPics/bottles.jpg';
import SimpleMap from "../../buyer/posts/Location";
import '../../buyer/posts/LoadingRing.css';
export default function Post() {

    const { postId } = useParams();
    console.log(postId);

    const [postData, setPostData] = useState({});
    const [offerList, setOfferList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        getpost()
    }, [])

    
    const getpost = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`/sellerViewPrvPost/${postId}`)
            console.log(response);
            const allPost = response.data.post;
            setPostData(allPost);
            setIsLoading(false)
        } catch (error) {
            console.error(`Error: ${error}`)
            setHasError(true)
        }
      
    }

    const sellerAcceptOffer = (offerId) => {
        console.log("asp")
        const data = {
            status: "Accepted",
            postId: postId
        };
        axios.patch(`/sellerAcceptPostOffer/${offerId}`, data)
            .then((result) => {
                console.log("ACCPTED")
           //     clear();
              //  toastNotification();
              //  history.push(`/seller/home`);
        });
    }
   

  //  console.log(postData);
   // console.log(offerList);
    return (
        <>
            {
                isLoading ?
                    <div className="seller-post-list-background">
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div> : hasError ?
                        <div className="seller-post-list-background">
                            <h1>Error occured.</h1>
                        </div> :
                        <div className="seller-post-list-background">
                            <div className="seller-post-list">
                                <div className="seller-post-card">
                                    <h2>Post Type : {postData.postType}</h2>
                                    <h2>Buyer : {postData.buyer}</h2>
                                    <h2>District : {postData.district}</h2>
                                    <h2>Address : {postData.address}</h2>
                                    <h2>Contact No : {postData.contact}</h2>
                                    {postData && postData.wasteItemList && postData.wasteItemList.map((item, index) => {
                                        
                                        return (
                                            <div className="seller-post-card-item">
                                                <div className="seller-post-card-item-header">
                                                    <h3>Item: {index + 1}</h3>
                                                </div>
                                                <div className="seller-post-card-item-details">
                                                    <h4>{item.wasteType} | {item.item}</h4>
                                                    <img src={item.selectedFile} alt="img" />
                                                    <p>Quantity : {item.quantity}</p>
                                                    <p>Available On :{moment(item.avbDate).format("LLL")}</p>
                                                    <a href="#">View Offers For Item</a>
                                                </div>
                                                
                                            </div>
                                            
                                            
                                        )
                                        
                                    })}
                                </div>
                                
                            </div>
                           
                            
      
                        </div>
            }
       
        </>

    );
        
    
}