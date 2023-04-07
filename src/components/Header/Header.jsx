import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header-menu">
                    <ul className="header-ul">
                        <li className="header-li">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link to="/review">
                                Order Review
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link to="/inventory">
                                Manage Inventory
                            </Link>
                        </li>
                        <li className="header-li">
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;