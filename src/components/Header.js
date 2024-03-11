import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
               
            </nav>
        </header>
    );
    }

export default Header;