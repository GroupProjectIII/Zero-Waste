import './Buyer.css';
import buypic from './BuyerImages/images.jpg';
import { useHistory } from 'react-router';

export default function Buyer() {

    const history = useHistory();

    const viewdirectpost = () => {

        history.push("/seller/directpost")
    }
    const viewbuyer = () => {
        history.push("/seller/buyer")
    }
    return (
        <div className="buyer-list-background">
             <div className="view-buyers">
            
           
            <div class="seller-buyer-search-container">
                <form className="seller-search-buyer">
                    <label className="serch-buyer-lable">Waste Type</label>
                    <input type="text" placeholder="Search.." name="search" id="serchinput" />
                    <label className="serch-buyer-lable">Waste Item</label>
                    <input type="text" placeholder="Search.." name="search" id="serchinput"/>
                    <label className="serch-buyer-lable">Area</label>
                    <select>
                        <option selected>All</option>
                        <option>Colombo</option>
                        <option>Gampala</option>
                        <option>Kaluthara</option>
                        <option>Yakkala</option>
                    </select>
                    <button className="seller-search-buyer-btn" type="submit">Search</button>
                </form>
            </div>
           
            </div>
           
            <div className="buyer-list">
            <div className="buyer-list-header">
                <h2>Top Rated Buyers</h2>
            </div>
            <div className="buyer-row">
                <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>We are collecting plastic and plastic related items.</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn"onClick={viewbuyer}>View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                    </div>
                    <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>We are collecting plastic and plastic related items.</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn"onClick={viewbuyer}>View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                    </div>
                    <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>We are collecting plastic and plastic related items.</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn"onClick={viewbuyer}>View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                    </div>
                    <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>We are collecting plastic and plastic related items.</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn"onClick={viewbuyer}>View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        </div>
    )
}