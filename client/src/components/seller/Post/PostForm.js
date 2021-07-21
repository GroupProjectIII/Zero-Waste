import React, { useState, useEffect, Component} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../../actions/posts';

import './PostForm.css';

function PublicPost({currentId, setCurrentId}) {

    const [formItemList, setFormItemList] = useState([]);

    const [postData, setPostData] = useState({ address: '', contact: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    const FormItem = () => {
        
        const [image, setImage] = useState();
        const [preview, setPreview] = useState();

        useEffect(() => {
            if (image) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                }
                reader.readAsDataURL(image);
            } else {
                setPreview(null);
            }
        })

        return (
            <div className="seller-post-item">
                <div className="seller-add-post-item-header">
                    <h3>Add Waste Item</h3>
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
                    <input className="seller-add-post-input" id="input" name="item" type="text"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="quantity">Quantity</label>
                    <input className="seller-add-post-input" id="input" name="quantity" type="text"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="date">Available On</label>
                    <input className="seller-add-post-input" id="input" name="quantity" type="date"></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" for="picture">Add Picture</label>
                    
                    <div className="seller-add-post-row"><FileBase type="file" multiple={false} onDone={({ base64 }) => {
                        setPostData({ ...postData, selectedFile: base64 });
                    }} /></div>
                    <img className="item-preview-picture" src={preview}></img>
                </div>

                <a href="#" className="seller-waste-item-delete-btn" onClick={(e)=>deleteItem(e)}>Delete Item</a>
            </div>
        );
    }
    useEffect(() => addWasteItem(), []);
    

    const addWasteItem = () => {
        setFormItemList(formItemList.concat(<FormItem key={formItemList.length} />));
    }

    const deleteItem = (e) => {
        e.preventDefault();
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
        <div className="seller-add-post-background">
        <div className="seller-add-post">
            <div className="seller-add-post-header">
                <h2>Add New Post</h2>
            </div>
            <form className="seller-add-new-post-form" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <label className="seller-add-post-label"></label>
                <select class="seller-add-post-select" name="option" >
                    <option value="0" disabled selected>Select Post Type</option>
                    <option value="1">Public</option>
                    <option value="2">Direct</option>
                </select>
                    <select className="seller-add-post-select" name="option">
                    <option value="0" selected>All Buyers</option>
                    <option value="1">Lk Collectors</option>
                    <option value="2">Abc Industries</option>

                </select>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlfor="address">Address</label>
                        <input className="seller-add-post-input"
                            id="input"
                            name="address"
                            type="text"
                            value={postData.creator}
                           onChange={(e) => setPostData({ ...postData, address: e.target.value })}
                        ></input>
                </div>
                <div className="seller-add-post-row"> 
                    <label className="seller-add-post-label" htmlfor="contact">Contact Nuber</label>
                        <input className="seller-add-post-input"
                            id="input"
                            name="contact"
                            type="tel"
                            value={postData.creator}
                           onChange={(e) => setPostData({ ...postData, contact: e.target.value })}
                        ></input>
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
        </div>
    )
}
export default PublicPost;