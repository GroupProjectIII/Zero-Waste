import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import SimpleMap from "./Location";

function PostsLocation() {
    return (
        <>
            <Navbar/>
            <SimpleMap/>
            <Footer/>
        </>
    );
}

export default PostsLocation;