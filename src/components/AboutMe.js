import React from 'react'
import '../styles/About.css'
import Skills from './Skills'


const AboutMe = () => {
  return (
      <div className="about-content" id="about-content">

      <Skills />
          <div className="about-text" data-aos="fade-in">
            <h2>Hola Mundo 🌎</h2>
            <br></br>
            
        
            <p>
              <span role="img" aria-label="lightning">
              🚀
              </span>{' '}
               Soy un desarrollador web fullstack de Argentina 🇦🇷, tierra en donde el mate y el código fluyen como una combinación perfecta 💻🧉
            </p>
            <br></br>
            <p>
              <span role="img" aria-label="lightning">
              ⭐
              </span>{' '}
              Me especializo en el desarrollo de aplicaciones web y móviles, con un enfoque en la creación de experiencias de usuario atractivas y funcionales.{' '}
            </p>
            <br></br>
            <hr></hr>
            <br></br>

            <div className="typewriter">
              
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                🎓
                </span>{' '}
                Diplomado en Programación Web Full Stack - <i>Finalizado</i>
              </p>
             
             
        
              
              <br></br>
            </div>
            
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                📖
                </span>{' '}
                Estudiante de la Licenciatura en Sistemas - <i>En curso</i>
              </p>
             
            </div>
            
            <div className="typewriter">
              
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                🎓
                </span>{' '}
                Especialización en Python - <i>Finalizado</i>
              </p>
             
             
          
              
              <br></br>
            </div>
            
            <div className="typewriter">
              
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                🎓
                </span>{' '}
                Especialización en PHP/Laravel - <i>Finalizado</i>
              </p>
             
             
         
              
              <br></br>
            </div>
          
            <br></br>
            <div className="location-wrapper" data-aos="fade-in">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>

      </div>
  )
}

export default AboutMe;