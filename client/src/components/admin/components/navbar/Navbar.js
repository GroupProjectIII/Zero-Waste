import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../../../buyer/home/Navbar.css';
import './NavButton';
import {Button} from "../../../buyer/home/NavButton";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const history = useHistory();

    const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        history.push("/");
    };


    return (
        <>
        <nav className='navbar-b'>
            <div className='navbar-logo-b'>
                ZERO-WASTE
                <i class='fab fa-firstdraft' />
            </div>
            <div className='menu-icon-b'>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu-b active' : 'nav-menu-b'}>
                <li className='nav-item-b'>
                    <Link to='/admin' className='nav-links-b'>
                        Home
                    </Link>
                </li>
               
<<<<<<< HEAD
                <li className='nav-item-c'>
                    <Link to='/' className='nav-links-b'  onClick={logoutHandler}>
                        Sign Out <i className="fas fa-sign-out-alt"></i>
=======
                <li className='nav-item-b'>
                    <Link to='/contact-us' className='nav-links-b' onClick={closeMobileMenu}>
                        Account
>>>>>>> e6e07c24d2298a497819f44b01b4c452c98d7f9a
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    </>
    );
}

export default Navbar;