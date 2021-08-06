import React, { useState, useEffect } from "react";
import './Posts.css';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import SimpleMap from "./Location";

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

    return(
        <div className="posts-b">
            <div className="posts__container-b">
                <h1>Post Details</h1>
                <div className="seller-container-b">
                    <ol className="list">
                        <li ><span>Seller Name: {posts.address}</span></li>
                        <li ><span>Seller Address: {posts.address}</span></li>
                        <li ><span>Mobile No: {posts.address}</span></li>
                    </ol>
                </div>
                <main className="grid-b">
                    <article>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Polythene - පොලිතින්</p>
                            <p>Waste Item: Polythene Roll</p>
                            <p>Quantity: 1 kg</p>
                            <button >Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/plastic.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Plastic - ප්ලාස්ටික්</p>
                            <p>Waste Item: Bottles</p>
                            <p>Quantity: 2 kg</p>
                            <button >Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>

                    <article>
                        <img src="../images/paper.jpg" alt=""></img>
                        <div className="text-b">
                            <h3>Post ID: 1</h3>
                            <p>Waste Type: Paper - කඩදාසි</p>
                            <p>Waste Item: Papers</p>
                            <p>Quantity: 1 kg</p>
                            <button >Make Offer <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </article>
                </main>
                    <div className="all-items-button-b">
                        <p>Do you want to make an offer for all these items at once?</p>
                        <Link className="link-button-b" style={{color: '#fff', textDecoration: 'none'}} to ={`/buyer/offerforms/${id}`}>Make Offer for All Items <i className="fas fa-angle-double-right"></i></Link>
                    </div>
            </div>
            <SimpleMap loc={location}/>
        </div>
    );
}

export default ViewPost;