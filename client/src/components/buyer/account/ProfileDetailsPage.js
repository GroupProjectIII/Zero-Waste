import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function ProfileDetailsPage ({ currentId, setCurrentId }) {
    
    const history = useHistory();
    if ((!localStorage.getItem("authToken")) || !(localStorage.getItem("usertype") === "buyer")) {
        history.push("/");
    }
    const buyerId = (localStorage.getItem("id"));

    const [buyerDescription, setDescription] = useState("");

    const [buyerAddress, setAddress] = useState("");

    const [contact, setContact] = useState("");
    const [buyerContact, setContactList] = useState([]);

    const contactList = buyerContact.map((con) => {
        <li>{con}</li>
    });

    const [favouriteAreas, setFavouriteAreas] = useState([]);
    const [area, setArea] = useState("");

    const [type, setType] = useState("");
    const [favouriteWasteTypes, setFavouriteTypes] = useState([]);

    const [item, setItem] = useState("");
    const [favouriteWasteItems, setFavouriteItems] = useState([]);

    const [buyerImages, setImages] = useState("");

    
   // buyerId,
   // buyerDescription,
   // buyerAddress,
   // buyerContact,
   // favouriteAreas,
   // favouriteWasteTypes,
   // favouriteWasteItems,
   // buyerImages
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submit");
        const newBuyerDetails = {
            buyerId,
            buyerDescription,
            buyerAddress,
            buyerContact,
            favouriteAreas,
            favouriteWasteTypes,
            favouriteWasteItems,
            buyerImages
        }

        console.log(newBuyerDetails);
        if (currentId === 0) {
           // console.log(newPostData);
            axios.post('/buyerAddDetails', newBuyerDetails).then((res) => {
                console.log(res);
                alert("Post Added Sucessfully!");
            }
            ).catch((err) => {
                alert(err)
            })
      
        } else {
        
        
        }
        history.push("/buyer/home");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="discription">Description:</label>
                    <input type="textarea" onChange={(e) => {
                        setDescription(e.target.value);
                        
                    }}/>
                </div>
                <div>
                    <label for="address">Address:</label>
                    <input type="text" onChange={(e) => {
                        setAddress(e.target.value);
                    }}/>
                </div>
                <div>
                    <label for="contact">Contact No: </label>
                    
                    <input type="text" onChange={(e) => {
                        setContact(e.target.value);
                    }} />
                    <input type="submit" value="add" onClick={(e) => {
                        e.preventDefault();
                        setContactList(buyerContact => [...buyerContact, contact]);
                    }} />
                </div>
                <div>
                    <label for="areas">Favourite Areas: </label>                                     
                    <input type="text" onChange={(e) => {
                        setArea(e.target.value);
                     //   setFavouriteAreas(favouriteAreas => [...favouriteAreas, e.target.value]);
                     //   console.log(favouriteAreas);
                    } } />
                    <input type="submit" value="add" onClick={(e) => {
                        e.preventDefault();
                         setFavouriteAreas(favouriteAreas => [...favouriteAreas, area]);
                    }} />
                   
                </div>
                <div>
                    <label for="types">Favourite Waste Types: </label>
                    <input type="text" onChange={(e) => {
                        setType(e.target.value);
                    }} />
                    <input type="submit" value="add" onClick={(e) => {
                        e.preventDefault();
                        setFavouriteTypes(favouriteWasteTypes => [...favouriteWasteTypes, type]);
                    }} />
                </div>
                <div>
                    <label for="items">Favourite Waste Items: </label>
                    <input type="text" onChange={(e) => {
                        setItem(e.target.value);
                    }} />
                    <input type="submit" value="add" onClick={(e) => {
                        e.preventDefault();
                        setFavouriteItems(favouriteWasteItems => [...favouriteWasteItems, item]);
                    }} />
                </div>
                <div>
                    <label for="image">Images : </label>
                    <input type="file"
                        accept="image/**"
                        onChange={
                            (e) => {
                                const file = e.target.files[0];
                                const fileReader = new FileReader();
                                fileReader.readAsDataURL(file);
                                fileReader.onload = () => {
                                 //     console.log(fileReader.result);
                                    let base64 = fileReader.result;
                                    setImages(buyerImages => [...buyerImages, base64]);
                                }
                            }
                        }/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}