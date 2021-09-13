import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Form.css';
import 'react-toastify/dist/ReactToastify.css';
import {Slide, toast, ToastContainer} from "react-toastify";
import {useParams} from "react-router-dom";
import emailjs from "emailjs-com";
import StartRating from "../../../../buyer/posts/Ratings";

function DirectPostForm() {

    const { buyerId } = useParams();
    console.log(buyerId);

    const [buyer, setBuyer] = useState({});

    useEffect(()=>{
        getOneSellerOrCompany();
    }, []);

    const getOneSellerOrCompany = async () => {
        try {
            const response = await axios.get(`/getOneSellerOrCompany/${buyerId}`)
            console.log(response);
            const oneSellerOrCompany=response.data.oneSellerOrCompany;
            setBuyer(oneSellerOrCompany);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }
    console.log(buyer);
    const buyerEmail=buyer.email;
    const buyerName=buyer.username;
    console.log(buyerEmail);
    console.log(buyerName);

    const companyId=(localStorage.getItem("userId"));
    const companyName=(localStorage.getItem("userName"));
    console.log(companyId, companyName);

    const apiUrl = '/addCompanyPost';
    const initialValues = {
        companyId:'',
        companyName:'',
        postType:'',
        buyer:'',
        address:{
            number:'',
            street:'',
            city:'',
            district:''
        },
        contact:'',
        wasteType:'',
        item:'',
        avbDate:'',
        quantity:''

    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        const data = {
            companyId:companyId,
            companyName:companyName,
            postType:'direct',
            buyer:buyerId,
            address:{
                number:formValues.number,
                street:formValues.street,
                city:formValues.city,
                district:formValues.district
            },
            contact:formValues.contact,
            wasteType:formValues.wasteType,
            item:formValues.item,
            avbDate:formValues.avbDate,
            quantity:formValues.quantity
        };
        axios.post(apiUrl, data)
            .then((result) => {
                //sendEmail();
                toastNotification();
                clear();
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

    const date2 = new Date();
    date2.setDate(date2.getDate());

    const validate = (values) => {
        let errors = {};
        const regex = /^[0-9]+$/;

        const d1 = new Date(values.avbDate);

        if (!values.number) {
            errors.number = "Cannot be blank";
        }
        if (!values.street) {
            errors.street = "Cannot be blank";
        }
        if (!values.city) {
            errors.city = "Cannot be blank";
        }
        if (!values.district) {
            errors.district = "Cannot be blank";
        }
        if (!values.contact) {
            errors.contact = "Cannot be blank";
        }else if (!regex.test(values.contact)) {
            errors.contact = "Invalid value format";
        }
        if (!values.wasteType) {
            errors.wasteType = "Cannot be blank";
        }
        if (!values.item) {
            errors.item = "Cannot be blank";
        }
        if (!values.avbDate) {
            errors.avbDate = "Cannot be blank";
        }else if (d1<=date2) {
            errors.avbDate = "Available date should not be a past date.";
        }
        if (!values.quantity) {
            errors.quantity = "Cannot be blank";
        }else if (!regex.test(values.quantity)) {
            errors.quantity = "Invalid value format";
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
            companyId:'',
            companyName:'',
            postType:'',
            buyer:'',
            number:'',
            street:'',
            city:'',
            district:'',
            contact:'',
            wasteType:'',
            item:'',
            avbDate:'',
            quantity:''
        });
    };

    const toastNotification = () => {
        toast.info("You added the post successfully !", {
            transition: Slide
        })
    };

    const templateParams = {
        from_name: 'Zero-Waste',
        to_name: buyerName,
        message: 'Your have a direct post from a company! Please visit our site for more details.',
        reply_to: 'zerowasteproject3@gmail.com',
        user_email:buyerEmail,
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

    const sellerId=buyerId;
    const selId = {sellerId};

    return(
        <div className="addpost_container-c">
            <div className="forms-c">
                <div className="forms__container-c" >
                    <div className="container-c">
                        <div className="content-c">
                            <div className="title-c">Add Direct Post</div>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="user-details-c">
                                    <div className="input-box-c">
                                        <span className="details-c">Address Number (අංකය)</span>
                                        <input type="text" name="number" id="number" placeholder="Enter number" value={formValues.number}
                                               onChange={handleChange}
                                               className={formErrors.number && "input-error"}></input>
                                        {formErrors.number && (
                                            <span className="error" style={{color:'red'}}>{formErrors.number}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Street (වීදිය)</span>
                                        <input type="text" name="street" id="street" placeholder="Enter street" value={formValues.street}
                                               onChange={handleChange}
                                               className={formErrors.street && "input-error"}></input>
                                        {formErrors.street && (
                                            <span className="error" style={{color:'red'}}>{formErrors.street}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">City (නගරය)</span>
                                        <input type="text" name="city" id="city" placeholder="Enter city" value={formValues.city}
                                               onChange={handleChange}
                                               className={formErrors.city && "input-error"}></input>
                                        {formErrors.city && (
                                            <span className="error" style={{color:'red'}}>{formErrors.city}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">District (දිස්ත්රික්කය)</span>
                                        <input type="text" name="district" id="district" placeholder="Enter district" value={formValues.district}
                                               onChange={handleChange}
                                               className={formErrors.district && "input-error"}></input>
                                        {formErrors.district && (
                                            <span className="error" style={{color:'red'}}>{formErrors.district}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Contact No (සම්බන්ධතා අංකය)</span>
                                        <input type="text" name="contact" id="contact" placeholder="Enter contact" value={formValues.contact}
                                               onChange={handleChange}
                                               className={formErrors.contact && "input-error"}></input>
                                        {formErrors.contact && (
                                            <span className="error" style={{color:'red'}}>{formErrors.contact}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Type (වර්ගය)</span>
                                        <input type="text" name="wasteType" id="wasteType" placeholder="Enter waste type" value={formValues.wasteType}
                                               onChange={handleChange}
                                               className={formErrors.wasteType && "input-error"}></input>
                                        {formErrors.wasteType && (
                                            <span className="error" style={{color:'red'}}>{formErrors.wasteType}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Item (අයිතමය)</span>
                                        <input type="text" name="item" id="item" placeholder="Enter item" value={formValues.item}
                                               onChange={handleChange}
                                               className={formErrors.item && "input-error"}></input>
                                        {formErrors.item && (
                                            <span className="error" style={{color:'red'}}>{formErrors.item}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="date-c">Required Date (අවශ්‍ය දිනය)</span>
                                        <input type="date" name="avbDate" id="avbDate" placeholder="Enter date" value={formValues.avbDate}
                                               onChange={handleChange}
                                               className={formErrors.avbDate && "input-error"}></input>
                                        {formErrors.avbDate && (
                                            <span className="error" style={{color:'red'}}>{formErrors.avbDate}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Quantity (Kg) (ප්රමාණය)</span>
                                        <input type="text" name="quantity" id="quantity" placeholder="Enter quantity" value={formValues.quantity}
                                               onChange={handleChange}
                                               className={formErrors.quantity && "input-error"}></input>
                                        {formErrors.quantity && (
                                            <span className="error" style={{color:'red'}} >{formErrors.quantity}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="button-c">
                                    <input type="submit" value="Add Post"></input>
                                    <ToastContainer position="top-right" toastStyle={{ backgroundColor: "green" }} autoClose={3000} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="company-rating-c">
                    <StartRating sId={selId}/>
                </div>
            </div>
        </div>
    );
}

export default DirectPostForm;