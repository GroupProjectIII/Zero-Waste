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
               
                <li className='nav-item-b'>
                    <Link to='/contact-us' className='nav-links-b' onClick={closeMobileMenu}>
                        Account
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
    </>
    );
}

export default Navbar;