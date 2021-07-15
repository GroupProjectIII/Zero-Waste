import React from 'react'
import "./newuser.css"
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Newuser() {
    return (
        <div>
        <Navbar/>
        <div className="container">
            <Sidebar/>
        <div className="newuser">
            <h1 className="newuserTitle">Add New User</h1>
            <form action="" className="newform">

                <div className="fitems">
                    <label>Username</label>
                    <input type="text" placeholder="username"/>
                </div>

                <div className="fitems">
                    <label>Full Name</label>
                    <input type="text" placeholder="name"/>
                </div>

                <div className="fitems">
                    <label>Email</label>
                    <input type="email" placeholder="email"/>
                </div>

                <div className="fitems">
                    <label>Contact Number</label>
                    <input type="text" placeholder="contact number"/>
                </div>

                <div className="fitems">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </div>

            </form>
            <button className="nbutton">Create</button>    

        </div>
        </div>
        <Footer/>
        </div>
    )
}
