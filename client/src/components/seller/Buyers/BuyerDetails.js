import ProPIc from './BuyerImages/images.jpg';

export default function BuyerDetails() {
    return (
        
        <div className="buyer-details-card">
            <div className="buyer-details">
                <div className="col-25">
                    <h1>Lk Collectors</h1>
                    <div className="ratings-star">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                    </div>
                    <p>Active Collector Since 2020 Apr</p>
                    <img src={ProPIc}></img>
                    <p>discription***</p>
                </div>
                <div className="col-75">
                    <div className="s-b-detail">
                        <h2>Address:</h2>
                        <p>No 127, Kandy Rd, Kadawatha.</p>
                    </div>
                    <div className="s-b-detail">
                        <h2>Contact Number:</h2>
                        <p>+94264158756, +94587596321</p>
                    </div>
                    
                    
                    <div className="buyer-type-list">
                        <h2>Favourite Waste Types:</h2>
                        <ul>
                            <li>Plastic</li>
                            <li>Polythene</li>
                        </ul>
                        <button>View All</button>
                    </div>
                    <div className="buyer-area-list">
                        <h2>Favourite Collecting Areas:</h2>
                        <ul>
                            <li>Gampaha</li>
                            <li>Ganemulla</li>
                            <li>Kadawatha</li>
                            <li>Nittabuwa</li>
                            <li>Ragama</li>
                            
                        </ul>
                        <button>View All</button>
                        <div className="sell-now">
                            <button>Sell Now</button>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    
    )
}