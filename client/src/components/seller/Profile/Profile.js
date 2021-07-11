import { useHistory } from "react-router";

export default function Profile() {

    const history = useHistory();
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    return (
        <h1>profile</h1>
    )
}