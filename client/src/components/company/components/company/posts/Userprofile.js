import React, { useEffect,useState } from "react";
import './Userprofile.css';
import axios from "axios";
import moment from "moment";
import {Link, useHistory} from "react-router-dom";
import emailjs from "emailjs-com";

function UserProfile() {

    const companyId=(localStorage.getItem("userId"));
    console.log(companyId);

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getAllComments();
    }, []);

    const getAllComments = async () => {
        await axios.get(`/viewRateAndComment`)
            .then ((response)=>{
                const allNotes=response.data.existingComments;
                setComments(allNotes);
            })
            .catch(error=>console.error(`Error: ${error}`));
    }
    console.log(comments);

    const sellerComment = comments?.filter(sellerComment => sellerComment.commentAboutId===companyId);
    console.log(sellerComment);

    const [company, setCompany] = useState({});

    useEffect(()=>{
        getOneSellerOrCompany();
    }, []);

    const getOneSellerOrCompany = async () => {
        try {
            const response = await axios.get(`/getOneSellerOrCompany/${companyId}`)
            console.log(response);
            const oneSellerOrCompany=response.data.oneSellerOrCompany;
            setCompany(oneSellerOrCompany);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(company);
    const companyEmail=company.email;
    const companyName=company.username;
    console.log(companyEmail);
    console.log(companyName);

    const [companyDetails, setCompanyDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`/getCompanyDetailsForCompany`)
            .then((response) => setCompanyDetails(response.data.existingCompany))
            .catch((err) => console.error(err));
    }, []);

    console.log(companyDetails);

    const oneCompany = companyDetails.filter(oneBuyer => oneBuyer.companyId === companyId);
    console.log(oneCompany);

    const history = useHistory();

    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        history.push("/");
    };

    const deleteCompany = (id) => {
        axios.delete(`/deleteCompany/${id}`)
            .then((result) => {
                logoutHandler();
            });
    };

    const deleteCompanyDetails = (id) => {
        axios.delete(`/deleteBuyerDetails/${id}`)
            .then((result) => {
                //sendEmail();
                deleteCompany(companyId);
            });
    };

    const templateParams = {
        from_name: 'Zero-Waste',
        to_name: companyName,
        message: 'Your account deleted successfully! Thank you.',
        reply_to: 'zerowasteproject3@gmail.com',
        user_email:companyEmail,
        project_email:'zerowasteproject3@gmail.com'
    };

    const sendEmail = () => {
        emailjs.send('service_34ny3hp', 'template_91bru6e', templateParams, 'user_pzyBOo0Td3FLgOvuNU4mq')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    };

    return(
        <div className="profile_body-c">
            <div id="profile_content2-c">
                {oneCompany.map((com, index) => (
                <div className="description-c" id="description-c">
                    <h3 className="company_name-c">Company Name : {com.companyName}</h3><br></br>
                    <h4 className="company_email-c">Company Email : {companyEmail}</h4><br></br>
                    <h4 className="company_mobile-c">Company Contact No : {com.companyContact}</h4><br></br>
                    <h4 className="company_address-c">Company Address : {com.address}</h4><br></br>
                    <h4 className="company_collecting_area-c" >Waste Type: {com.wasteType}</h4><br></br>
                    <h4 className="company_collecting_area-c" >Waste Item: {com.wasteItem}</h4><br></br>
                    <h4 className="company_collecting_area-c" >Registered Date: {moment(com.CreatedAt).fromNow()}</h4><br></br>
                    <div className="buttons-c" >
                        <div className="buttons" >
                            <span className="action_btn-b">
                                <Link style={{color: '#fff', textDecoration: 'none'}}
                                      to={`/company/editprofile/${com._id}`}
                                >Edit Profile <i className="fas fa-edit"></i></Link>
                                <button onClick={() => {
                                    deleteCompanyDetails(com._id)
                                }}>Delete Profile <i className="fas fa-trash-alt"></i></button>
                            </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div id="profile_content3-c">
                <h1>Comments and Reviews</h1>
                {sellerComment.map((post, index) => (
                    <div className="profile_reviews_c">
                        <div className="profile_reviews_body_c">
                            <div className="profile_review_body_header_c">
                                <div className="profile_div_star-c">
                                    <i className="fas fa-star"></i> {post.rating}/5
                                </div>
                                <h3>by {post.commenterName} at {moment(post.CreatedAt).fromNow()}</h3>
                            </div>
                            <div className="profile_review_body-c">
                                <h4>{post.comment}</h4>
                                <br></br>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserProfile;