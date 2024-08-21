// @flow strict

import * as React from 'react';
import logo from'../../images/logo.png';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
           <img src={logo} alt='' className='img'/>
           <nav>
            <a href='/shop'>shop</a>
            <a href='/review'>review</a>
            <a href='/manage'>Manage inventory</a>
           </nav>
        </div>
    );
};

export default Header;