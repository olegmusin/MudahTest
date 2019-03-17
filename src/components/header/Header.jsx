import React from 'react';
import ReactSVG from 'react-svg';
import './header.css';

const Header = (props) => {
    return (
        <div className="header">
            <ul>
                <li>
                    <ReactSVG src="mudah_logo.svg" className="header-logo" />
                </li>
                <li className="header-link">Categories</li>
                <li className="header-link">Notifications</li>
                <li className="header-link">Login / Sign up</li>
                <li className="header-link">Help</li>
            </ul>
        </div>
    );
};

export default Header;
