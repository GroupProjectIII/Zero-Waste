import React, { useState, useEffect } from "react";
import './Posts.css';
import {useParams} from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

function ViewOfferDetails() {

    const { offerId } = useParams();
    console.log(offerId);

    const [posts, setPosts] = useState({});
    const [offerPosts, setOfferPosts] = useState({});

    useEffect(()=>{
        getOnePost();
    }, []);

    useEffect(()=>{
        if (posts && posts.location) {
            console.log(posts.location);
            console.log(posts.location.longitude);
            console.log(posts.location.latitude);
        }
    }, [posts]);

    const getOnePost = async () => {
        try {
            const response = await axios.get(`/buyerGetOneSellerOffer/${offerId}`)
            console.log(response);
            const allPost=response.data.oneOffer;
            setPosts(allPost);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(posts);

    useEffect(()=>{
        if (offerPosts && offerPosts.location) {
            console.log(offerPosts.location);
            console.log(offerPosts.location.longitude);
            console.log(offerPosts.location.latitude);
        }
    }, [offerPosts]);

    const getOneOfferPost = async () => {
        if(PostId2 !== undefined) {
            try {
                const response = await axios.get(`/buyerGetOnePost/${PostId2}`)
                console.log(response);
                const allOfferPost=response.data.onePost;
                setOfferPosts(allOfferPost);
            } catch (error) {
                console.error(`Error: ${error}`)
            }
        }
    }
    const PostId2=posts.postId;

    useEffect(()=>{
        getOneOfferPost();
    }, [PostId2]);

    console.log(offerPosts);

    const wasteItemsListId = posts.wasteItemsListId;
    console.log(wasteItemsListId);

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Offer Details</h1>
                <div className="seller-container-b">
                    <ol className="list">
                        <li ><span>Seller Name: {offerPosts.address}</span></li>
                        <li ><span>Seller Address: {offerPosts.address}</span></li>
                        <li ><span>Telephone No: {offerPosts.contact}</span></li>
                        <li ><span>Post Type: {offerPosts.postType}</span></li>
                    </ol>
                </div>
                <main className="grid-b">
                    {offerPosts && offerPosts.wasteItemList && offerPosts.wasteItemList.map((post,index)=> {
                        if(post._id === wasteItemsListId){
                            return (
                                <article>
                                    <div className="text-b">
                                        <h3>Post ID: {index + 1}</h3>
                                        <p>Waste Type: {post.wasteType}</p>
                                        <p>Waste Item: {post.item}</p>
                                        <p>Quantity: {post.quantity} kg</p>
                                        <p>Can Collect Items: {moment(post.avbDate).fromNow()}</p>
                                    </div>
                                </article>
                            );
                        }else if(wasteItemsListId === 'completePost'){
                            return (
                                <article>
                                    <div className="text-b">
                                        <h3>Post ID: {index + 1}</h3>
                                        <p>Waste Type: {post.wasteType}</p>
                                        <p>Waste Item: {post.item}</p>
                                        <p>Quantity: {post.quantity} kg</p>
                                        <p>Can Collect Items: {moment(post.avbDate).fromNow()}</p>
                                    </div>
                                </article>
                            );
                        }
                    })}
                </main>
            </div>
        </div>
    );
}

export default ViewOfferDetails;