import Navbar from '../Nav/Navbar';
import Footer from '../Nav/Footer';
import ProfileDetails from './ProfileDetails';

import { useHistory } from "react-router";

export default function SellerProfile() {

    const history = useHistory();
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <h1>profile</h1>
            <Footer />
        </>
    )
}