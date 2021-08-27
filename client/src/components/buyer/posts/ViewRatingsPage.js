import React, { useEffect,useState } from "react";
import './ViewRatings.css';
import axios from "axios";
import {useParams} from "react-router-dom";
import moment from "moment";

function ViewRatingsPage() {

    const { sellerId } = useParams();
    console.log(sellerId);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getAllComments();
    }, []);

    const getAllComments = async () => {
        await axios.get(`/viewRateAndComment`)
            .then ((response)=>{
                const allNotes=response.data.existingComments;
                setComments(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(comments);

    const sellerComment = comments?.filter(sellerComment => sellerComment.commentAboutId===sellerId);
    console.log(sellerComment);

    return(
        <div className="profile_body-c">
            <div id="profile_content3-c">
                <h1>Comments and Reviews</h1>
                {sellerComment.map((post,index)=>(
                <div className="profile_reviews_c">
                    <div className="profile_reviews_body_c">
                        <div className="profile_review_body_header_c">
                            <div className="profile_div_star-c">
                                <i class="fas fa-star"></i> {post.rating}/5
                            </div>
                            <h3>by {post.commenterName} at {moment(post.CreatedAt).fromNow()}</h3>
                        </div>
                        <div className="profile_review_body-c">
                            <h4>{post.comment}</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ViewRatingsPage;