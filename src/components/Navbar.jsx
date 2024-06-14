import React, { useState, useEffect, useRef } from 'react';
import "../styles/Navbar.css";
import logo from "../assets/logo-2.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='hamburger' onClick={toggleMenu}>&#9776;</div>
            <div id="forflex" className={`tabs ${menuOpen ? 'show' : ''}`} ref={menuRef}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className="dropdown">
                        <a href="/" className="dropbtn" onClick={toggleDropdown}>Service &#9660;</a>
                        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                            <a href="/service/application-modernization">Application Modernization</a>
                            <a href="/service/cloud-engineering">Cloud Engineering</a>
                            <a href="/service/data-engineering-analytics">Data Engineering & Analytics</a>
                            <a href="/service/intelligent-automation">Intelligent Automation</a>
                        </div>
                    </li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                </ul>
                <ul>
                    <li className='contact'>
                        <button>Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
