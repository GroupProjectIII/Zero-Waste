import React from "react";
import './RComment.css';

function RComment() {

    return(
        <div className="rcommentform">
            <div className="container">
                <div className="post">
                    <div className="text">Thanks for rating!</div>
                    <div className="edit">EDIT</div>
                </div>
                <div className="star-widget">
                    <input type="radio" name="rate" id="rate-5"/>
                    <label for="rate-5" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-4"/>
                    <label for="rate-4" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-3"/>
                    <label for="rate-3" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-2"/>
                    <label for="rate-2" class="fas fa-star"></label>
                    <input type="radio" name="rate" id="rate-1"/>
                    <label for="rate-1" class="fas fa-star"></label>
                    <form action="#">
                        <header></header>
                        <div className="textarea">
                            <textarea cols="30" placeholder="Describe your experience.."></textarea>
                        </div>
                        <div class="btn">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
            </div>
         
        </div>

    );
}

export default RComment;