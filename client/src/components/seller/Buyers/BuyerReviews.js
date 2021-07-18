import "./BuyerReviews.css";

export default function BuyerReviews() {
    return (
        <div>
            <h1>Reviews & Comments <i class="fas fa-comments"></i></h1>
            <div className="add-comment">
                <form className="add-comment-form">
                
                    <input type="text" placeholder="Add New Comment" id="comment" />
                    <button type="submit"><i class="fas fa-envelope"></i></button>
                </form>
            </div>
            <div className="card-container">
                <div className="card">
                    <div>
                        <div className="sender-details">                      
                            <i class="fas fa-user-circle"></i>           
                            <h3>John Snow</h3>
                            <p>December 24, 2020 at 3:45 pm</p>
                            <p>Seller</p>                      
                        </div>
                    </div>
                    <div className="user-comment">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                    <div className="user-reply">
                        <div className="reply-details">                      
                            <i class="fas fa-user-circle"></i>           
                            <h3>Lk Collectors</h3>
                            <p>December 26, 2020 at 3:55 pm</p>
                            <p>Owner</p>
                        </div> 
                        <div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="sender-details">                      
                            <i class="fas fa-user-circle"></i>           
                            <h3>John Snow</h3>
                            <p>December 24, 2020 at 3:45 pm</p>
                            <p>Seller</p>                      
                        </div>
                    </div>
                    <div className="user-comment">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    </div>
                    <div className="user-reply">
                        <div className="reply-details">                      
                            <i class="fas fa-user-circle"></i>           
                            <h3>Lk Collectors</h3>
                            <p>December 26, 2020 at 3:55 pm</p>
                            <p>Owner</p>
                        </div> 
                        <div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        </div>
                    </div>
                    <div className="user-reply">
                        <div className="reply-details">                      
                            <i class="fas fa-user-circle"></i>           
                            <h3>Lk Collectors</h3>
                            <p>December 26, 2020 at 3:55 pm</p>
                            <p>Owner</p>
                        </div> 
                        <div>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}