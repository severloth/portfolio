import React from 'react';
import '../styles/header.css';


const Header = () => {
    return (
        <header data-aos="fade-in" data-aos-delay="100">
            <nav>
                <ul>
                    <li><a href="#main">Inicio</a></li>
                    <li><a href="#about-content">Sobre mi</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                </ul>
               
            </nav>
        </header>
    );
    }

export default Header;