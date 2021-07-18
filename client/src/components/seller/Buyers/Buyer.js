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
       
        <div className="buyer-list">
            <div className="buyer-row">
                <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>collect all... collect alll... colllect all....collect all... collect a lll... colllect all ....collect all... collect alll... colllect all....</p>
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
                        <p>collect all... collect alll... colllect all....collect all... collect a lll... colllect all ....collect all... collect alll... colllect all....</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn">View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                </div>
                <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>collect all... collect alll... colllect all....collect all... collect a lll... colllect all ....collect all... collect alll... colllect all....</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        
                            <button className="view-more-btn">View More</button>
                            <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                        
                    </div>
                    
                </div>
                <div className="buyer-column">
                    <div className="buyer-card">
                        <img src={buypic} alt="logo"/>
                        <h1>Lk Collectors</h1>
                        <p>collect all... collect alll... colllect all....collect all... collect a lll... colllect all ....collect all... collect alll... colllect all....</p>
                        <h4>Rathings</h4>
                        <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <button className="view-more-btn">View More</button>
                        <button className="sell-now-btn" onClick={viewdirectpost}>Sell Now</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
       
    )
}