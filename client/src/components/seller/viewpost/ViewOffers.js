import Navbar from "../Nav/Navbar";
import Footer from '../Nav/Footer';
import Offers from './SellerOfferList';
import SellerSidebar from './Sidebar';

export default function ViewOffers() {
    return (
        <>
            <Navbar />
            <SellerSidebar />
            <Offers />
            <Footer />
        </>
    )
}