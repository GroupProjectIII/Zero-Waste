import React, { useState } from 'react';
import { Button } from '../buyer/home/NavButton';
import {Link, useHistory} from 'react-router-dom';
import '../buyer/home/Navbar.css';

function HomeNavbar() {
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
                <Link to='/' className='navbar-logo-b' onClick={closeMobileMenu}>
                    ZERO-WASTE
                    <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon-b' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu-b active' : 'nav-menu-b'}>
                    <li className='nav-item-b'>
                        <Link to='/' className='nav-links-b' onClick={closeMobileMenu}>
                            Home <i className="fa fa-home" aria-hidden="true"></i>
                        </Link>
                    </li>
                    <li className='nav-item-b'>
                        <Link to='/register' className='nav-links-b' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item-b'>
                        <Link to='/login' className='nav-links-b' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='nav-links-mobile-b' onClick={logoutHandler}>
                            Sign Out <i className="fas fa-sign-out-alt"></i>
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default HomeNavbar;