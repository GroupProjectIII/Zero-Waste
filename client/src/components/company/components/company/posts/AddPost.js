import React, {useState} from 'react';
import axios from "axios";
import './Form.css';


function AddPost() {
    const [input, setInput] = useState({
        type: '',
        item: '',
        quantity: '',
        date: '',
        description: ''
    })

    function handleChange(event){
        const{name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newNote = {
            type: input.type,
            item: input.item,
            quantity: input.quantity,
            date: input.date,
            description: input.description
        }
        axios.post('http://127.0.0.1:5000/company/companypost', newNote);
    }

    return(
        <div className="addpost_container-c">
            <div className="forms-c">
                <div className="forms__container-c" >
                    <div className="container-c">
                        <div className="content-c">
                            <div className="title-c">Add New Post</div>
                            <form action="/" method="POST">
                                <div className="user-details-c">
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Type</span>
                                        <input onChange={handleChange} name="type" value={input.type} autoComplete="off" type="text" placeholder="Enter type" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Waste Item</span>
                                        <input onChange={handleChange} name="item" value={input.item} autoComplete="off" type="text" placeholder="Enter item" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="details-c">Quantity</span>
                                        <input onChange={handleChange} name="quantity" value={input.quantity} autoComplete="off" type="text" placeholder="Enter quantity" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="date-c">Date</span>
                                        <input onChange={handleChange} name="date" value={input.date} autoComplete="off" type="date" placeholder="Enter date" required></input>
                                    </div>
                                    <div className="input-box-c">
                                        <span className="description-c">Description</span>
                                        <textarea onChange={handleChange} name="description" value={input.description} autoComplete="off"></textarea>
                                    </div>
                                </div>
                                <div className="button-c">
                                    <input onClick={handleClick} type="submit" value="Add Post"></input>
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