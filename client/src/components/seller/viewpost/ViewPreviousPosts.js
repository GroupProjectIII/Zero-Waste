import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import PreviousPosts from "./PreviousPosts";
import SellerSidebar from './Sidebar';

export default function ViewPreviousPosts() {
    return (
        <>
            <Navbar />
            <SellerSidebar />
            <PreviousPosts />
            <Footer />
        </>
    )
}