import React from 'react';
import '../styles/otherprojects.css';

const OtherProjects = () => {
    return(
        <div className="otherprojects">
            <div className="otherprojects-title">
                <h1>Otros proyectos hechos con </h1>
                <img src='/wp.png' alt="wordpress"></img>
            </div>
            <div className='otherprojects-container'>


                <div className="otherprojects-card clewi" data-aos="fade-in">
                    <div className="otherprojects-card-overflow">
                        <h1>Clewi</h1>
                        <p>Optimizaciones del sitio web, bases de datos y mejoras de diseño hecho en WordPress</p> <p>Clewi es la forma más sencilla y fácil de hacer merchandising de calidad desde la producción y diseño hasta el almacenamiento y distribución.</p>
                        <div className='otherprojects-icon'>
                        <img src="/wp.png" alt="stack" />
                        <img src="/js.png" alt="stack" />
                        
                        </div>
                        <a href='https://clewi.io' target='new'><img src='ojo.png' alt="ver"/></a>
                       
                    </div>
                </div>

                <div className="otherprojects-card estit" data-aos="fade-in">
                    <div className="otherprojects-card-overflow">
                        <h1>Instituto Integral Trujui</h1>
                        <p>Página web institucional para el Instituto Integral Trujui hecha en WordPress.</p>
                        <div className='otherprojects-icon'>
                        <img src="/wp.png" alt="stack" />
                        <img src="/js.png" alt="stack" />
                        </div>
                        <a href='https://integraltrujui.com'><img src='ojo.png' alt="ver"/></a>

                    </div>
                </div>

        
            
            </div>
           
        </div>
    )
}

export default OtherProjects;