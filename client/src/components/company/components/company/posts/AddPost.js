import React, {useEffect,useState} from 'react';
import axios from "axios";
import './Form.css';
import {useHistory} from "react-router-dom";

function AddPost() {
    const companyId=(localStorage.getItem("userId"));
    console.log(companyId);

    const apiUrl = '/addCompanyPost';
    const initialValues = {
        wasteType: '',
        wasteItem: '',
        quantity: '',
        requireddate: '',
        description: '',
        companyId:''
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const submitForm = () => {
        const data = {
            wasteType:formValues.wasteType,
            wasteItem:formValues.wasteItem,
            quentity:formValues.quentity,
            requireddate:formValues.requireddate,
            description:formValues.description,
            companyId:companyId,
        };
        axios.post(apiUrl, data)
            .then((result) => {
                clear();
                history.push('/company/ongoingp');
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
        const regex = /^[0-9]+$/;

        if (!values.wasteType) {
            errors.wasteType = "Cannot be blank";
        }
        if (!values.wasteItem) {
            errors.wasteItem = "Cannot be blank";
        }
        if (!values.description) {
            errors.description = "Cannot be blank";
        }
        if (!values.quantity) {
            errors.quantity = "Cannot be blank";
        }
        if (!values.requireddate) {
            errors.requireddate = "Cannot be blank";
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
            wasteType: '',
            wasteItem: '',
            quantity: '',
            requireddate: '',
            description: '',
            companyId:''
        });
    };

    return(
        <div className="addpost_container-c">
            <div className="forms-c">
                <div className="forms__container-c" >
                    <div className="container-c">
                        <div className="content-c">
                            <div className="title-c">Add New Post</div>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="user-details-c">
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Type</span>
                                        <input type="text" name="wasteType" id="wasteType" placeholder="Enter waste type" value={formValues.wasteType}
                                           onChange={handleChange}
                                           className={formErrors.wasteType && "input-error"}></input>
                                        {formErrors.wasteType && (
                                            <span className="error" style={{color:'red'}}>{formErrors.wasteType}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Item</span>
                                        <input type="text" name="wasteItem" id="wasteItem" placeholder="Enter waste item" value={formValues.wasteItem}
                                           onChange={handleChange}
                                           className={formErrors.wasteItem && "input-error"}></input>
                                        {formErrors.wasteItem && (
                                            <span className="error" style={{color:'red'}}>{formErrors.wasteItem}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                    <span className="details-c">Quantity (Kg)</span>
                                    <input type="text" name="quantity" id="quantity" placeholder="Enter quantity" value={formValues.quantity}
                                           onChange={handleChange}
                                           className={formErrors.quantity && "input-error"}></input>
                                        {formErrors.quantity && (
                                            <span className="error" style={{color:'red'}} >{formErrors.quantity}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                        <span className="date-c">Date</span>
                                        <input type="date" name="requireddate" id="requireddate" placeholder="Enter date" value={formValues.requireddate}
                                           onChange={handleChange}
                                           className={formErrors.requireddate && "input-error"}></input>
                                        {formErrors.requireddate && (
                                            <span className="error" style={{color:'red'}}>{formErrors.requireddate}</span>
                                        )}
                                    </div>
                                    <div className="input-box-c">
                                    <span className="details-b">Description</span>
                                    <input type="text" name="description" id="description" placeholder="Enter description" value={formValues.description}
                                           onChange={handleChange}
                                           className={formErrors.description && "input-error"}></input>
                                    {formErrors.description && (
                                        <span className="error" style={{color:'red'}}>{formErrors.description}</span>
                                    )}
                                    </div>
                                </div>
                                <div className="button-c">
                                    <input type="submit" value="Add Post"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default AddPost;