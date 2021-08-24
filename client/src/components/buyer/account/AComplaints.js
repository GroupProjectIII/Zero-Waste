import React, {useEffect, useState} from "react";
import '../posts/Form.css';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AComplaints() {

    const buyerId=(localStorage.getItem("userId"));
    const buyerName=(localStorage.getItem("userName"));
    const buyerEmail=(localStorage.getItem("userEmail"));
    console.log(buyerId, buyerName, buyerEmail);

    const apiUrl = '/addComplaint';
    const initialValues = {
        complaintAbout: '',
        complaintDetails: '',
        userId: '',
        userName: '',
        userEmail:''
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        const data = {
            complaintAbout:formValues.complaintAbout,
            complaintDetails:formValues.complaintDetails,
            userId:buyerId,
            userName:buyerName,
            userEmail:buyerEmail
        };
        axios.post(apiUrl, data)
            .then((result) => {
                clear();
                toastNotification();
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

    const validate = (values) => {
        let errors = {};

        if (!values.complaintAbout) {
            errors.complaintAbout = "Cannot be blank";
        }
        if (!values.complaintDetails) {
            errors.complaintDetails = "Cannot be blank";
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
            complaintAbout: '',
            complaintDetails: '',
            userId: '',
            userName: '',
            userEmail:''
        });
    };

    const toastNotification = () => {
        toast.info("You're added complaint successfully !", {
            transition: Slide
        })
    };

    return(
    <div className="forms-b">
        <div className="forms__container-b" >
            <div className="container-b">
                <div className="title-b">Add Complaints</div>
                <div className="content-b">
                    <form className="buyer-form-b" onSubmit={handleSubmit} noValidate>
                        <div className="user-details-b">
                            <div className="input-box-b">
                                <span className="details-b">Name of the company/person to complain</span>
                                <input type="text" name="complaintAbout" id="complaintAbout" placeholder="Enter name" value={formValues.complaintAbout}
                                       onChange={handleChange}
                                       className={formErrors.complaintAbout && "input-error"}></input>
                                {formErrors.complaintAbout && (
                                    <span className="error" style={{color:'red'}}>{formErrors.complaintAbout}</span>
                                )}
                            </div>
                            <div className="input-box-b">
                                <span className="details-b">Complaint Details</span>
                                <input type="text" name="complaintDetails" id="complaintDetails" placeholder="Enter details" value={formValues.complaintDetails}
                                       onChange={handleChange}
                                       className={formErrors.complaintDetails && "input-error"}></input>
                                {formErrors.complaintDetails && (
                                    <span className="error" style={{color:'red'}}>{formErrors.complaintDetails}</span>
                                )}
                            </div>
                        </div>
                        <div className="button-b">
                            <input type="submit" value="Add Complaint"></input>
                            <ToastContainer position="top-right" toastStyle={{ backgroundColor: "green" }} autoClose={3000} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AComplaints;