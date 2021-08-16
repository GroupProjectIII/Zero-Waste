import { LocationSearching, Mail, MailOutline, PermIdentity, Person, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function User() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className='user'>
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Edit USer</h1>
                        <Link to="/admin/newUser">
                            <button className="editbutton">Create</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l62Oh7haAVOSzvNyN-d-JSo0YmIzNm9ch-iXQZiYbqxrWr3WDF_nU9vU6WJqvTGl7-6HFiH0wtDqUg&usqp=CAU" alt="" className="userimg" />
                                <div className="title">
                                    <span className="name">Ruvidu Munasinghe</span>
                                    <span className="userrole">Customer</span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="showTitle">Account Details</span>

                                <div className="userinfo">
                                    <PermIdentity className='icon' />
                                    <span className="use">Ruvidu</span>
                                </div>
                                <div className="userinfo">
                                    <MailOutline className='icon' />
                                    <span className="use">Ruvidu@gmail.com</span>
                                </div>
                                <div className="userinfo">
                                    <Person className='icon' />
                                    <span className="use">Customer</span>
                                </div>
                                <span className="showTitle">Contact Details</span>
                                <div className="userinfo">
                                    <PhoneAndroid className='icon' />
                                    <span className="use">0776564197</span>
                                </div>
                                <div className="userinfo">
                                    <LocationSearching className='icon' />
                                    <span className="use">Colombo</span>
                                </div>

                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="uTitle">Edit</span>
                            <form className="userform">
                                <div className="uleft">

                                    <div className="uitem">
                                        <label>Username</label>
                                        <input type="text" placeholder="Ruvidu" className='uinput' />
                                    </div>

                                    <div className="uitem">
                                        <label>E-mail</label>
                                        <input type="text" placeholder="Ruvidu@gmail.com" className='uinput' />
                                    </div>

                                    <div className="uitem">
                                        <label>Contact Number</label>
                                        <input type="text" placeholder="0776564197" className='uinput' />
                                    </div>

                                    <div className="uitem">
                                        <label>Address</label>
                                        <input type="text" placeholder="Colombo" className='uinput' />
                                    </div>

                                </div>
                                <div className="uright">
                                    <div className="upload">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l62Oh7haAVOSzvNyN-d-JSo0YmIzNm9ch-iXQZiYbqxrWr3WDF_nU9vU6WJqvTGl7-6HFiH0wtDqUg&usqp=CAU" alt="" className="uimg" />
                                        <label htmlFor="file"><Publish className="uicon" /></label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>
                                    <button className="ubutton">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
