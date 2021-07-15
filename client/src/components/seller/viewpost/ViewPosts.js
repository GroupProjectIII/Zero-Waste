import { useHistory } from "react-router";

export default function MyPost() {

    const history = useHistory();
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }

    return (
        <div>
            <h1>view</h1>
      </div>
        
    )
}