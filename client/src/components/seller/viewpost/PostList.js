import '../../buyer/posts/Posts.css';
import {Link} from "react-router-dom";
const PostList = (props) => {
    const note = props.note;

    return (
        <article>
        <img src={note.thumbnail} alt=""></img>
        <div className="text-b">
         
            <p>Seller Name: {note.sellerName}</p>
            <p>District: {note.sellerDistrict}</p>
            <p>Post Type: {note.postType}</p>
            <p>Address: {note.address}</p>
            <p>Telephone No: {note.contact}</p>
            <div className="buyerlink-b">
                <Link style={{ color: '#fff', textDecoration: 'none' }}
                    to={`/seller/viewpost/${note._id}`}>View Post <i
                        className="fas fa-angle-double-right"></i></Link>
            </div>
            <div className="buyerlink-b">
                <Link style={{ color: '#fff', textDecoration: 'none' }}
                    to={`/seller/viewpost/${note._id}`}>Edit Post <i
                        className="fas fa-angle-double-right"></i></Link>
            </div>
        </div>
    </article>
    )
}
export default PostList;