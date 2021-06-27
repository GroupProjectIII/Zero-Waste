import React, { useState } from 'react';
import { Button } from './NavButton';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                            Home
                        </Link>
                    </li>
                    <li className='nav-item-b'>
                        <Link to='/companyposts' className='nav-links-b' onClick={closeMobileMenu}>
                            Company Posts
                        </Link>
                    </li>
                    <li className='nav-item-b'>
                        <Link to='/posts' className='nav-links-b' onClick={closeMobileMenu}>
                            Seller Posts
                        </Link>
                    </li>
                    <li className='nav-item-b'>
                        <Link to='/contact-us' className='nav-links-b' onClick={closeMobileMenu}>
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-links-mobile-b' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;