import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import SimpleMap from "./Location";
import moment from 'moment';

function ViewPost() {

    const { id } = useParams();
    console.log(id);

    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

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
            const response = await axios.get(`/buyerGetOnePost/${id}`)
            console.log(response);
            const allPost=response.data.onePost;
            setPosts(allPost);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(posts);

    const long = posts?.location?.longitude;
    console.log(long);
    const lat=posts?.location?.latitude;
    console.log(lat);

    const location={lat,long};
    console.log(posts.wasteItemList);
    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Post Details</h1>
                <div className="seller-container-b">
                    <ol className="list">
                        <li ><span>Seller Name: {posts.address}</span></li>
                        <li ><span>Seller Address: {posts.address}</span></li>
                        <li ><span>Telephone No: {posts.contact}</span></li>
                        <li ><span>Post Type: {posts.postType}</span></li>
                    </ol>
                </div>
                <main className="grid-b">
                    {posts && posts.wasteItemList && posts.wasteItemList.map((post,index)=>(
                    <article>
                        <div className="text-b">
                            <h3>Post ID: {index+1}</h3>
                            <p>Waste Type: {post.wasteType}</p>
                            <p>Waste Item: {post.item}</p>
                            <p>Quantity: {post.quantity} kg</p>
                            <p>Can Collect Items: {moment(post.avbDate).fromNow()}</p>
                            <div className="buyerlink-b">
                                <Link style={{color: '#fff', textDecoration: 'none'}} to ={`/buyer/singleoffers/${id}/${post._id}`}>Make Offer <i className="fas fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </article>
                    ))}
                </main>
                    <div className="all-items-button-b">
                        <p>Do you want to make an offer for all these items at once?</p>
                        <Link className="link-button-b" style={{color: '#fff', textDecoration: 'none'}} to ={`/buyer/offerforms/${id}`}>Make Offer for All Items <i className="fas fa-angle-double-right"></i></Link>
                    </div>
                <h1>Seller's Location</h1>
            </div>
            <SimpleMap loc={location}/>
        </div>
    );
}

export default ViewPost;