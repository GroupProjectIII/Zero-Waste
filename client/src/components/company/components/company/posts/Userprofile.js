import React, { useEffect,useState } from "react";
import './Userprofile.css';
import {useHistory} from "react-router-dom";
import axios from "axios";

function UserProfile() {
    const history = useHistory();

    const handleRoute = () =>{
        history.push("/company/editprofile");
    }

    //view
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        await axios.get(`/viewCompanyDetails`)
            .then ((response)=>{
                const allNotes=response.data.existingPosts;
                setNotes(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(notes);

    

    return(
        <div class="profile_body-c">
            {notes.map((note,index)=> (
            <div id="profile_content1-c">
                <div className="image-c" id="image-c">
                    <img src="../../images/polythene.png" alt="" />
                </div> 
                <div className="profile_contact-c" id="profile_contact-c">
                    <h3 className="company_name-c">{note.companyName}</h3><br></br>
                    <h4 className="company_email-c">{note.buyerId}</h4><br></br>
                    <h4 className="company_mobile-c">{note.companyContact}</h4><br></br>
                    <h4 className="company_address-c">{note.address}</h4><br></br>
                    <h4 className="company_collecting_area-c" >{note.wasteType}</h4>
                </div>
            </div>
            ))}

            <div id="profile_content2-c">
                <div className="description-c" id="description-c">
                    <p>Zero-waste is a web based waste bying and selling platform for sellers to sell their recyclable  and non recyclable waste, and buyers to find waste items to buy.Anyone can make your works easier through zero-waste.Come and join with us..</p>       
                </div>
               <div className="buttons-c" id="buttons-c">
               <div className="buttons" id="buttons">
                <span className="action_btn-b">
                    <a href="#" onClick={handleRoute}>Edit</a>
                    <a href="#">Remove</a>
                </span>
            </div>    
                </div>        
            </div>

            <div id="profile_content3-c">
                <h1>Reviews</h1>
                <div className="profile_reviews_c">
                    <div className="profile_reviews_header_c">
                        <h2>5.0/5.0</h2>
                        <div className="profile_reviews_star_c">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <h3> | 1 review</h3><br></br>
                        </div>
                    </div>
                    <div className="profile_reviews_body_c">
                        <div className="profile_review_body_header_c">
                            <div className="profile_review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="profile_review_image_c"></img>
                            </div>
                            <div className="profile_div_star-c">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="profile_review_body-c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="profile_reviews_body_c">
                        <div className="profile_review_body_header_c">
                            <div className="profile_review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="profile_review_image_c"></img>
                            </div>
                            <div className="profile_div_star-c">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="profile_review_body-c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="profile_reviews_body_c">
                        <div className="profile_review_body_header_c">
                            <div className="profile_review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="profile_review_image_c"></img>
                            </div>
                            <div className="profile_div_star-c">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="profile_review_body-c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="profile_reviews_body_c">
                        <div className="profile_review_body_header_c">
                            <div className="profile_review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="profile_review_image_c"></img>
                            </div>
                            <div className="profile_div_star-c">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="profile_review_body-c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;