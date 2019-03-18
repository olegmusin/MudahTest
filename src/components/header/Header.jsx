import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import './header.css';
import Logo from '../Logo/Logo';

const Header = (props) => {
    const [collapsed, toggleNavbar] = useState(false);
    return (
        <div>
            <Navbar
                color="faded"
                light
                expand="md"
                fixed="top"
                className="header aligned"
            >
                <NavbarBrand href="/" className="navbar-icon">
                    <Logo className="header-logo" />
                </NavbarBrand>

                <NavbarToggler
                    onClick={() => toggleNavbar((prevState) => !prevState)}
                    className="mr-2"
                />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar fill justified className="navbar-dropdown">
                        <NavItem className="navbar-link">Categories</NavItem>
                        <NavItem className="navbar-link">Notifications</NavItem>
                        <NavItem className="navbar-link">
                            Login / Sign up
                        </NavItem>
                        <NavItem className="navbar-link">Help</NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
