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
                </div>
                <div className="col-75">
                    <h3>Location:</h3>
                    <p>No 127, Kandy Rd, Kadawatha.</p>
                    <h3>Contact Number:</h3>
                    <p>+94264158756, +94587596321</p>
                    
                    <div className="buyer-profile-list">
                        <h2>Favourite Waste Types:</h2>
                        <ul>
                            <li>Plastic</li>
                            <li>Polythene</li>
                        </ul>
                    </div>
                    <div className="buyer-profile-list">
                        <h2>Favourite Collecting Areas:</h2>
                        <ul>
                            <li>Gampaha</li>
                            <li>Ganemulla</li>
                            <li>Kadawatha</li>
                            <li>Nittabuwa</li>
                            <li>Ragama</li>
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    
    )
}