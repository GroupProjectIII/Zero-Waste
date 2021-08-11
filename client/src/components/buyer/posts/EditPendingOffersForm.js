import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Form.css';
import {useParams, useHistory} from "react-router-dom";
import {Slide, toast, ToastContainer} from "react-toastify";
import moment from 'moment';

function EditOfferForms() {

    const { id } = useParams();
    console.log(id);

    const initialValues = {
        value: '',
        expiryDate: '',
        quantity: ''
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    //const history = useHistory();

    useEffect(() => {
        const GetData = async () => {
            const result = await axios.get(`/buyerGetOneSellerOffer/${id}`);
            setFormValues(result.data.oneOffer);
        };
        GetData();
    }, []);

    console.log(formValues);

    const submitForm = () => {
        const data = {value:formValues.value, expiryDate:formValues.expiryDate, quantity:formValues.quantity};
        axios.patch(`/editPendingSellerOffer/${id}`, data)
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

    const d1 = new Date(formValues.expiryDate);
    console.log(d1);
    const d2 = moment(d1).format('YYYY-MM-DD');
    console.log(d2);

    const clear = () => {
        setFormValues({
            value: '',
            expiryDate: '',
            quantity: ''
        });
    };

    const toastNotification = () => {
        toast.info("You're updated offer successfully !", {
            transition: Slide
        })
    };

    return(
        <div className="forms-b">
            <div className="forms__container-b" >
                <div className="container-b">
                    <div className="title-b">Edit Pending Offer</div>
                    <div className="content-b">
                        <form className="buyer-form-b" onSubmit={handleSubmit} noValidate>
                            <div className="user-details-b">
                                <div className="input-box-b">
                                    <span className="details-b">Offer Value</span>
                                    <input type="text" placeholder="Enter value" name="value" id="value" value={formValues.value}
                                           onChange={handleChange}
                                           className={formErrors.value && "input-error"} ></input>
                                    {formErrors.value && (
                                        <span className="error" style={{color:'red'}}>{formErrors.value}</span>
                                    )}
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Expiry Date</span>
                                    <input type="date" placeholder="Enter date" name="expiryDate" id="expiryDate" value={d2}
                                           onChange={handleChange}
                                           className={formErrors.expiryDate && "input-error"}></input>
                                    {formErrors.expiryDate && (
                                        <span className="error" style={{color:'red'}}>{formErrors.expiryDate}</span>
                                    )}
                                </div>
                                <div className="input-box-b">
                                    <span className="details-b">Quantity</span>
                                    <input type="text" placeholder="Enter quantity" name="quantity" id="quantity" value={formValues.quantity}
                                           onChange={handleChange}
                                           className={formErrors.quantity && "input-error"}></input>
                                    {formErrors.quantity && (
                                        <span className="error" style={{color:'red'}} >{formErrors.quantity}</span>
                                    )}
                                </div>
                            </div>
                            <div className="button-b">
                                <input type="submit" value="Edit Offer"></input>
                                <ToastContainer position="top-right" toastStyle={{ backgroundColor: "green" }} autoClose={3000} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOfferForms;