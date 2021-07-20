import { useHistory } from 'react-router';
import './SellerOfferList.css';

export default function SellerOfferList() {

    const history = useHistory()
    const viewBuyer = () => {
        history.push('/seller/buyer')
    }

    
    return (
        <>
            <div className="seller-offer-list-background">
            <div className="seller-offer-list">
                <table className="seller-offer-table">
                    <tr>
                        <th>Post Id</th>
                        <th>Item Id</th>
                        <th>Type</th>
                        <th>Item</th>
                        <th>Due Date</th>
                        <th>Collecting Date</th>
                        <th>Buyer Id</th>
                        <th>Buyer Name</th>
                        <th>Offer(Rs)</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#" onClick={viewBuyer}>View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#">View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    <tr>
                        <td>1<a className="offer-list-view-post" href="#">View Post</a></td>
                        <td>1</td>
                        <td>Plastic</td>
                        <td>Bottles</td>
                        <td>2021-07-24</td>
                        <td>2021-07-24</td>
                        <td>23 <a className="offer-list-view-buyer" href="#">View Buyer</a></td>
                        <td>Lk Collectors</td>
                        <td>200.00</td>
                        <td>
                            <a className="offer-list-accept" href="#">Accept</a>
                            <a className="offer-list-decline" href="#">Decline</a>    
                        </td>
                    </tr>
                    
                </table>
                </div>
                </div>
        </>
    )
    
}