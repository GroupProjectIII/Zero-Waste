import React, { useState, useEffect, Component} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../../actions/posts';
import './PostForm.css';
import axios from 'axios';

export default function PublicPost( {currentId, setCurrentId}) {

    const history = useHistory();
    
    if((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype")==="seller")){
        history.push("/");
    }
   
    const sellerId=(localStorage.getItem("id"));
   

    const [postType, setPostType] = useState("");
    const [buyer, setBuyer] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState([]);
    const [contact, setContact] = useState("");

  const wasteItem = {
    wasteType: '',
    item: '',
    avbDate: null,
    quantity: null,
    selectedFile: '',
  };

  //catstste = wasteItemList
  //blankcat= wasteitem

    const [wasteItemList, setWasteItemList] = useState([
        {...wasteItem}
    ]);
    
    const addWasteItem = () => {
        setWasteItemList([...wasteItemList, {...wasteItem}]);
    };

    const handleCatChange = (e) => {
        const updatedCats = [...wasteItemList];
        updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
        setWasteItemList(updatedCats);
    };
    
  
 
  
  
   const handleSubmit = async (e) => {
       e.preventDefault();
       const newPostData = {
           sellerId,
           postType,
           buyer,
           address,
           location,
           contact,
           wasteItemList
       }    

       if (currentId === 0) {
           console.log(newPostData);
            axios.post('/sellerAddPost', newPostData).then(res => console.log(res)
            ).catch((err) => {
            alert(err)
            })
      
    } else {
        
        
    }
    };
    

    const getlocation = (e) => {
        e.preventDefault();
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)
                let locationTp = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
               setLocation(locationTp)
              });
          } else {
            console.log("Not Available");
          }
    }
    
    
    return (
                 
        <div className="seller-add-post-background">
        <div className="seller-add-post">
            <div className="seller-add-post-header">
                <h2>Add New Post</h2>
            </div>
            <form className="seller-add-new-post-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <label className="seller-add-post-label"></label>
                    <select class="seller-add-post-select" name="option"
                        onChange={(e) => {
                            setPostType(e.target.value)
                        }}>
                        <option value="0" disabled selected>Select Post Type</option>
                        <option value="public">Public</option>
                        <option value="direct">Direct</option>
                    </select>
                    <select className="seller-add-post-select" name="option"
                        onChange={(e) => {
                         setBuyer(e.target.value)
                     }}>
                        <option value="all" selected>All Buyers</option>
                        <option value="bid1">Lk Collectors</option>
                        <option value="bid2">Abc Industries</option>

                    </select>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlfor="address">Address</label>
                        <input className="address"
                            id="input"
                            name="address"
                            type="text"
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                        required></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlfor="contact">Contact Nuber</label>
                        <input className="contact"
                            id="input"
                            name="contact"
                            type="tel"
                           onChange={(e) => setContact(e.target.value)}
                        required></input>
                </div>
                <div className="seller-add-post-row">
                    <label className="seller-add-post-label" for="location">Location</label>
                    <a href="#" onClick={(e) => { getlocation(e) }}>Get Location</a>
                </div>
        {
          wasteItemList.map((val, idx) => {
            const wasteTypeid = `wasteType-${idx}`;
              const itemid = `item-${idx}`;
              const avbDateid = `avbDate-${idx}`;
              const quantityid = `quantity-${idx}`;
              const selectedFileid = `selectedFile-${idx}`;
          return (
              <div key={`Waste Item-${idx}`} className="seller-post-item">
                <div className="seller-add-post-item-header">
                      <h3>{`Waste Item #${idx + 1}`}</h3>
                      <button className="seller-waste-item-delete-btn">Delete Item</button>
                  </div>
                  <select className="wasteType" name="wastetype">
                    <option value="0"disabled selected>Select Waste Type</option>
                    <option value="plastic">Plastic</option>
                    <option value="glass">Glass</option>
                    <option value="paper">Paper</option>
                    <option value="polythene">Polythene</option>
                    <option value="organic">Organic</option>
                    <option value="electronic">Electronic</option>
                    <option value="other">Other</option>

                  </select>
                  <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlFor={itemid}>Item</label>
                    <input className="item"
                        id="input"
                        name={itemid}
                        data-idx={idx}
                        type="text"
                        value={wasteItemList[idx].item}
                        onChange={handleCatChange}
                        
                    ></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlFor={quantityid}>Quantity</label>
                    <input className="quantity"
                        id="input"
                          name={quantityid}
                          data-idx={idx}
                          type="text"
                          value={wasteItemList[idx].quantity}
                        onChange={handleCatChange}
                    ></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for={avbDateid}>Available On</label>
                    <input className="avbDate"
                        id="input"
                          name={avbDateid}
                          data-idx={idx}
                          type="date"
                          value={wasteItemList[idx].avbDate}
                        onChange={handleCatChange}
                    ></input>
                </div>
                  
                  <div className="seller-add-post-row">
                      <label className="seller-add-post-label" for={selectedFileid}>Select Image</label>
                      <input className="selectedFile"
                          id="input"
                          name={selectedFileid}
                          data-idx={idx}
                          type="file"
                          accept="image/*"
                      //  value={wasteItemList[idx].selectedFile= target.files[0]}
                        //  onChange={handleCatChange}
                          onChange={
                              (e) => {
                                  let picfile = e.target.files[0];
                                  console.log(picfile);
                                  
                              }
                          }
                        ></input>
                </div>
                <div className="seller-add-post-row">
                      <FileBase className="selectedFile"
                          id="input"
                          name={selectedFileid}
                          data-idx={idx}
                          type="file"
                          multiple={false}
                          value={wasteItemList[idx].selectedFile}
                          onDone={({base64}) => {
                              console.log(base64);
                              handleCatChange(base64);
                          }}
                     /></div> 
                       
             
             
            </div>
          );      
        })
    }
        <a href="#" className="seller-add-waste-item-btn" onClick={addWasteItem}>Add Item</a>
        <button className="seller-post-submit-btn" type="submit">Submit</button>
    </form>
    </div>
    </div>
    );
}