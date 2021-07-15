import { useHistory } from "react-router";
import Navbar from "../Nav/Navbar";
import Footer from "../Nav/Footer";
import Search from "./Search";
import Buyer from './Buyer';

export default function SearchBuyerPage() {

    const history = useHistory();
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <Search />
            <Buyer />
            <Footer />
        </>
    )
}