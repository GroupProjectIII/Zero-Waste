import './AcceptedOffersList.css';

export default function AcceptedOffersList() {
    return (
        <div className="seller-accepted-offer-list-background">
            <div className="seller-accepted-offers">
                <div className="seller-accepted-offers-header">
                    <h3>Not Collected</h3>
                </div>
                <table className="seller-accepted-offers-table">
                    <tr>
                        <th>Post Id</th>
                        <th>Item Id</th>
                        <th>Buyer</th>
                        <th>Collecting Date</th>
                        <th>Offer Value(Rs)</th>
                        <th>Buyer transaction Code</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>Lk Collectors</td>
                        <td>2021-08-23</td>
                        <td>200.00</td>
                        <td><input type="text"></input><a className="item-collected-btn" href="#">Submit</a></td>
                    </tr>

                </table>
            </div>
       </div>

    );
}