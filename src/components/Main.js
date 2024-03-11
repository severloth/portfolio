import React from 'react';
import '../styles/main.css';
import ParticleA from './Particle';

import AOS from 'aos';

const Main = () => {

    AOS.init({duration: 2000});

    let [specialityIndex, setSpecialityIndex] = React.useState(0);
    let speciality = ["Backend", "Frontend", "Fullstack", "Mobile"]
    let particles = [];


    speciality = speciality[specialityIndex];

    React.useEffect(() => {
        let interval = setInterval(() => {
          setSpecialityIndex((specialityIndex + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
      }, [specialityIndex]);

      
    for (let i = 1; i < 5; i++) {
        particles.push(<ParticleA key={i} />);
    }

    return (
        <div className="main" id='main'>
          {particles}
          <h1  data-aos="fade-in" data-aos-delay="300">
            Facundo Gil <hr></hr>
            
            <span className="speciality"  data-aos="fade-in" data-aos-delay="400">{speciality}</span>
          </h1>
        
          <a href='#about' className='flecha'>
          </a>
          <div className='redes'>
                   <a href='https://www.linkedin.com/in/facundo-martin-gil-0ab710203/'> <div className='linkedin'></div></a>
                   <a href='https://github.com/severloth'> <div className='github'></div></a>
                   <a href='https://www.instagram.com/facuugil/'> <div className='instagram'></div></a>
            
                </div>
                
                </div>
          
      );
    }

export default Main;