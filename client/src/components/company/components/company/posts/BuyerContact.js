import React from "react";
import './BuyerContact.css';
import SimpleMap from "./BLocation";

function BuyerContact() {
    return(
        <div class="container">
            <div id="content1">
                <div className="image" id="image">
                    <img src="../../images/WCP.png" alt="" />
                </div> 
                <div className="buyer_contact" id="buyer_contact">
                    <h3 className="buyer_name">Tom Harris</h3><br></br>
                    <h4 className="buyer_email">wcp@gmail.com</h4><br></br>
                    <h4 className="buyer_mobile">011-1111111</h4><br></br>
                    <h4 className="buyer_address">Abc Rd, Colombo 07</h4><br></br>
                    <h4 className="buyer_collecting_area" >Colombo</h4>
                </div>
            </div>

            <div id="content4">
                <SimpleMap/>
            </div>

            <div id="content2">
                <div className="forms__container-b" >
                    <div className="container-c">
                        <div className="title-b">Contact Buyer</div>
                        <div className="content-c">
                            <form action="#">
                                <div className="user-details-b">
                                    <div className="input-box-b">
                                        <span className="details-b">Waste Type</span>
                                        <input type="text" placeholder="Enter name" required></input>
                                    </div>
                                    <div className="input-box-b">
                                        <span className="details-b">Waste Item</span>
                                        <input type="text" placeholder="Enter contact" required></input>
                                    </div>
                                    <div className="input-box-b">
                                        <span className="details-b">Amount</span>
                                        <input type="text" placeholder="Enter address" required></input>
                                    </div>
                                    <div className="input-box-b">
                                        <span className="details-b">Date</span>
                                        <input type="textarea" placeholder="Enter description" required></input>
                                    </div>
                                </div>
                                <div className="button-b">
                                    <input type="submit" value="Send"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content3">
                <h1>Reviews</h1>
                <div className="reviews_c">
                    <div className="reviews_header_c">
                        <h2>5.0/5.0</h2>
                        <div className="reviews_star_c">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <h3> | 1 review</h3><br></br>
                        </div>
                        <button className="reviews_button_c">Feedback</button>
                    </div>
                    <div className="reviews_body_c">
                        <div className="review_body_header_c">
                            <div className="review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="review_image_c"></img>
                            </div>
                            <div className="div_star">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="review_body_b_c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="reviews_body_c">
                        <div className="review_body_header_c">
                            <div className="review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="review_image_c"></img>
                            </div>
                            <div className="div_star">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="review_body_b_c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="reviews_body_c">
                        <div className="review_body_header_c">
                            <div className="review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="review_image_c"></img>
                            </div>
                            <div className="div_star">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="review_body_b_c">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas repellendus excepturi obcaecati sed et veritatis perferendis, ea, aspernatur dolore, minima quasi eligendi deserunt atque eum libero temporibus modi. Ex?</h4>
                            <br></br>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="reviews_body_c">
                        <div className="review_body_header_c">
                            <div className="review_body_header_image_c">
                                <img src="../../images/polythene.jpg" alt="" classsName="review_image_c"></img>
                            </div>
                            <div className="div_star">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <h3>by John Smith  on 20/07/2020</h3>
                        </div>
                        <div className="review_body_b_c">
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

export default BuyerContact;