import React, { useState, useEffect, Component} from 'react';
import { useHistory } from 'react-router-dom';
import './s-post.css';
import './PostForm.css';

function PublicPost() {

    const [formItemList, setFormItemList] = useState([]);


    const FormItem = () => {
        return (
            <div className="seller-post-item">
                <div className="seller-add-post-item-header">
                    <h4>Add Waste Item</h4>
                </div>
                <select className="seller-add-post-select" name="option">
                    <option value="0"disabled selected>Select Waste Type</option>
                    <option value="1">Plastic</option>
                    <option value="2">Glass</option>
                    <option value="3">Paper</option>
                    <option value="4">Polythene</option>
                    <option value="5">Organic</option>
                    <option value="6">Electronic</option>
                    <option value="7">Other</option>

                </select>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="item">Waste Item</label>
                    <input className="seller-add-post-input" id="address" name="item" type="text"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="quantity">Quantity</label>
                    <input className="seller-add-post-input" id="address" name="quantity" type="text"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="date">Available On</label>
                    <input className="seller-add-post-input" id="address" name="quantity" type="date"></input>
                </div>
                <a href="#" className="seller-waste-item-delete-btn" onClick={deleteItem}>Delete Item</a>
            </div>
        );
    }
    useEffect(() => addWasteItem(), []);
    

    const addWasteItem = () => {
        setFormItemList(formItemList.concat(<FormItem key={formItemList.length} />));
    }

    const deleteItem = () => {

    }
    //this.props.history.push('/select-buyer');
    const history = useHistory();
    
    const location = (e) => {
        e.preventDefault();
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
              });
          } else {
            console.log("Not Available");
          }
    }
    

    return (
        <div seller-add-post>
            <div className="seller-add-post-header">
                <h2>Add New Post</h2>
            </div>
            <form className="seller-add-new-post-form">
                <label className="seller-add-post-label"></label>
                <select class="seller-add-post-select" name="option" >
                    <option value="0" disabled selected>Select Post Type</option>
                    <option value="1">Public</option>
                    <option value="2">Direct</option>
                </select>
                <select className="seller-add-post-select" name="option">
                    <option value="1">Lk Collectors</option>
                    <option value="2">Abc Industries</option>

                </select>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="address">Address</label>
                    <input className="seller-add-post-input" id="address" name="address" type="text"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="contact">Contact Nuber</label>
                    <input className="seller-add-post-input" id="address" name="contact" type="tel"></input>
                </div>
                <div className="seller-add-post-row">
                    <label className="seller-add-post-label" for="location">Location</label>
                    <a href="#" onClick={(e) => { location(e) }}>Get Location</a>
                </div>
                {formItemList}
                <button className="seller-post-submit-btn" type="submit">Submit</button>
            </form>
            <a href="#" className="seller-add-waste-item-btn" onClick={addWasteItem}>Add Item</a>
        </div>
        
    )
}
export default PublicPost;