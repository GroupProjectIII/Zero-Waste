import React from 'react';
import './NavButton.css';
import { Link } from 'react-router-dom';


export function Button() {
    return (
        <Link to='sign-up'>
            <button className='btn-nav-b'>Sign Out <i className="fas fa-sign-out-alt"></i></button>
        </Link>
    );
}