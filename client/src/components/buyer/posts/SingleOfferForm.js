import React, {useEffect, useState} from "react";
import './Form.css';
import {useParams, useHistory} from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleOfferForm(props) {

    const { postId, arrayId } = useParams();
    console.log(postId,arrayId);

    const apiUrl = '/addSellerOffer';
    const initialValues = {
        value: '',
        expiryDate: '',
        quantity: '',
        buyerName: '',
        buyerEmail:'',
        postId:'',
        location:''
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    //const history = useHistory();

    const submitForm = () => {
        const data = {
            value:formValues.value,
            expiryDate:formValues.expiryDate,
            quantity:formValues.quantity,
            buyerName:name,
            buyerEmail:email,
            postId:postId,
            location:{
                latitude:lat,
                longitude:long
            }
        };
        axios.post(apiUrl, data)
            .then((result) => {
                clear();
                toastNotification();
                //history.push(`/buyer/viewpostdetails/${id}`);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    const date = new Date();
    date.setDate(date.getDate() + 8);

    const date2 = new Date();
    date2.setDate(date2.getDate());

    const validate = (values) => {
        let errors = {};
        const regex = /^[0-9]+$/;
        const d1 = new Date(values.expiryDate);
        console.log(d1);
        if (!values.value) {
            errors.value = "Cannot be blank";
        }else if (!regex.test(values.value)) {
            errors.value = "Invalid value format";
        }else if (values.value<=0) {
            errors.value = "Invalid value format";
        }
        if (!values.expiryDate) {
            errors.expiryDate = "Cannot be blank";
        }else if (date<=d1) {
            errors.expiryDate = "Expiry date should not be longer than a week.";
        }else if (d1<=date2) {
            errors.expiryDate = "Expiry date should not be a past date.";
        }
        if (!values.quantity) {
            errors.quantity = "Cannot be blank";
        }else if (!regex.test(values.quantity)) {
            errors.quantity = "Invalid quantity format";
        }else if (values.quantity<=0) {
            errors.quantity = "Invalid quantity format";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);

    const clear = () => {
        setFormValues({
            value: '',
            expiryDate: '',
            quantity: '',
            buyerName: '',
            buyerEmail:'',
            postId:'',
            location:''
        });
    };

    const toastNotification = () => {
        toast.info("You're added offer successfully !", {
            transition: Slide
        })
    };

    const [posts, setPosts] = useState({});

    const name=(localStorage.getItem("username"));
    const email=(localStorage.getItem("email"));
    console.log(name);
    console.log(email);

    useEffect(()=>{
        getOnePost();
    }, []);

    useEffect(()=>{
        if (posts && posts.location) {
            console.log(posts.location);
            console.log(posts.location.longitude);
            console.log(posts.location.latitude);
        }
    }, [posts]);

    const getOnePost = async () => {
        try {
            const response = await axios.get(`/buyerGetOnePost/${postId}`)
            console.log(response);
            const allPost=response.data.onePost;
            setPosts(allPost);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(posts);

    const long = posts?.location?.longitude;
    console.log(long);
    const lat=posts?.location?.latitude;
    console.log(lat);

    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                    <div className="content-b">
                        <h3>Image of Waste Item</h3>
                        <img src="../images/polythene.jpg" alt=""></img>
                        <div className="title-b">Make Offer</div>
                        <form className="buyer-form-b" onSubmit={handleSubmit} noValidate>
                            <div className="user-details-b">
                                <div className="input-box-b">
                                    <span className="details-b">Offer Value</span>
                                    <input type="text" name="value" id="value" placeholder="Enter value" value={formValues.value}
                                           onChange={handleChange}
                                           className={formErrors.value && "input-error"}></input>
                                    {formErrors.value && (
                                        <span className="error" style={{color:'red'}}>{formErrors.value}</span>
                                    )}
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Expiry Date</span>
                                    <input type="date" name="expiryDate" id="expiryDate" placeholder="Enter date" value={formValues.expiryDate}
                                           onChange={handleChange}
                                           className={formErrors.expiryDate && "input-error"}></input>
                                    {formErrors.expiryDate && (
                                        <span className="error" style={{color:'red'}}>{formErrors.expiryDate}</span>
                                    )}
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Quantity</span>
                                    <input type="text" name="quantity" id="quantity" placeholder="Enter quantity" value={formValues.quantity}
                                           onChange={handleChange}
                                           className={formErrors.quantity && "input-error"}></input>
                                    {formErrors.quantity && (
                                        <span className="error" style={{color:'red'}} >{formErrors.quantity}</span>
                                    )}
                                </div>
                            </div>
                            <div className="button-b">
                                <input type="submit" value="Send Offer"></input>
                                <ToastContainer position="top-right" toastStyle={{ backgroundColor: "green" }} autoClose={3000} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleOfferForm;