import React, { useState, useEffect, Component} from 'react';
import { useHistory } from 'react-router-dom';
import './s-post.css';

function PublicPost() {

    const [formItemList, setFormItemList] = useState([]);


    const FormItem = () => {
        return (
            <div className="form-item">
                <h3>Waste Item</h3>
                <div className="form-row">
                    <div className="col-25">
                        <label>Waste Type</label>
                    </div>
                    <div className="col-75">
                        <select>
                            <option value="plastic">Plastic</option>
                            <option value="glass">Glass</option>
                            <option value="paper">Paper</option>
                            <option value="polythene">Polythene</option>
                            <option value="organic">Organic</option>
                            <option value="Other" onChange={handleChange}>Other</option>
                        </select>
                    
                    </div>
                        
                </div>
                <div className="form-row">
                    <div className="col-25">
                        <label>Waste Item Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Item Name"></input>
                    </div>    
                </div>
                <div className="form-row">
                    <div className="col-25">
                        <label>Quantity</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder="Quantity"></input>
                    </div>
                   
                   
                </div>
                <div className="form-row">
                <div className="col-25">
                    <label>Collecting Date Time</label>
                </div>
                <div className="col-75">
                    <input type="datetime" placeholder="Date Time"></input>
                </div>
                    
                    
                </div>
                <div className="form-row">
                <div className="col-25">
                    <label>Pictures</label>
                </div>
                <div className="col-75">
                    <input type="file"></input>
                </div>
                        
                    </div>
                <button className="delete-item-btn" onClick={deleteItem}>Delete Item</button>
                
            </div>           
        );
    }
    useEffect(() => addWasteItem(), []);
    

    const addWasteItem = () => {
        setFormItemList(formItemList.concat(<FormItem key={formItemList.length} />));
    }

    const addPost = () => {
       
    }

    const handleChange = () => {

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
        <div className="s-addwaste-container">
            
            <br></br>
            

            <div className="form-card">
                <form onSubmit={addPost}>
                    <div className="form-row">
                        <div>
                            <label>Post Type:</label>
                        </div>
                        
                    </div>
                    <div className="form-row">
                        <div>
                            <label>Buyers:</label>
                        </div>
                        
                    </div>
                   
                    <div className="form-row">
                        <div className="col-25">
                            <label for="address">Address: </label>
                       </div>
                        <div className="col-75">
                            <input type="text" id="adddress" placeholder="address..."></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-25">
                        <label>Location: </label>
                       </div>
                        <div className="col-75">
                        <button className="get-location-btn" onClick={(e) => { location(e) }}>Get My Location</button>
                        </div>
                        
                        
                    </div>
                    
                    {formItemList}
                   
                    <button className="submit-btn" type="submit">Submit</button>
               </form>
            </div>
            <button className="add-item-btn" onClick={addWasteItem}>
                Add Item
            </button>

        </div>
    )
}
export default PublicPost;