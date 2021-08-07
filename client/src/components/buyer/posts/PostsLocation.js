import React, {useEffect, useState} from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import SimpleMap from "./Location";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import './Posts.css';

function PostsLocation() {

    const history = useHistory();

    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="buyer")){
        history.push("/");
    }

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
            const response = await axios.get(`/buyerGetOneSellerOffer/${id}`)
            console.log(response);
            const allPost=response.data.oneOffer;
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

    return (
        <>
            <Navbar/>
            <div className="posts-b">
                <div className="posts__container-b">
                    <h1>Seller's Location</h1>
                </div>
                <SimpleMap loc={location}/>
            </div>
            <Footer/>
        </>
    );
}

export default PostsLocation;