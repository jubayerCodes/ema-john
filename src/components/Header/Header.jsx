import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-logo">
                    <a href="">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="header-menu">
                    <ul className="header-ul">
                        <li className="header-li">
                            <a href="">
                                Order
                            </a>
                        </li>
                        <li className="header-li">
                            <a href="">
                                Orader Review
                            </a>
                        </li>
                        <li className="header-li">
                            <a href="">
                                Manage Inventory
                            </a>
                        </li>
                        <li className="header-li">
                            <a href="">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;