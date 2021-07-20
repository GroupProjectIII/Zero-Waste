import React from 'react'
import "./newuser.css"
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Newuser() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="an_newuser">
                    <h1 className="an_newuserTitle">Add New User</h1>
                    <form action="" className="an_newform">

                        <div className="an_fitems">
                            <label>Username</label>
                            <input type="text" placeholder="username" />
                        </div>

                        <div className="an_fitems">
                            <label>Full Name</label>
                            <input type="text" placeholder="name" />
                        </div>

                        <div className="an_fitems">
                            <label>Email</label>
                            <input type="email" placeholder="email" />
                        </div>

                        <div className="an_fitems">
                            <label>Contact Number</label>
                            <input type="text" placeholder="contact number" />
                        </div>

                        <div className="an_fitems">
                            <label>User Role</label>

                            <div className="an_role"> 
                            <input type="radio" value="buyer" name="buyer" id="buyer"/>
                            <label for="buyer">Buyer</label>

                            <input type="radio" value="seller" name="seller" id="seller"/>
                            <label for="seller">Seller</label>

                            <input type="radio" value="company" name="company" id="company"/>
                            <label for="company">Company</label>

                            <input type="radio" value="admin" name="admin" id="admin"/>
                            <label for="admin">Admin</label>
                            </div>
                        </div>
                        

                        <div className="an_fitems">
                            <label>Password</label>
                            <input type="password" placeholder="password" />
                        </div>

                    </form>
                    <button className="an_nbutton">Create</button>

                </div>
            </div>
            <Footer />
        </div>
    )
}
