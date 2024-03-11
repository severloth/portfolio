/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../styles/projects.css";


const Projects = () => {

  const [project, setProject] = React.useState("ashpa");
  const projectsData = {

    ashpa: {
      id: "ashpa",
      title: "ASHPA",
      description: "Página web para ASHPA, artesanía auténtica de Santiago del Estero, Argentina. ",
      url: "https://ashpa.com.ar",
      stack1: "php.png",
      stack2: "js.png",
      stack3: "react.png",
      stack4: "css.png"

    },

    decti: {
      id: "decti",
      title: "DECTI",
      description: "Página web de la Subsecretaría de Economía del Conocimiento de San Miguel, Buenos Aires.",
      url: "https://decti.msm.gov.ar/",
      stack1: "laravel.png",
      stack2: "html.png",
      stack3: "js.png",
      stack4: "css.png"

    },

    "decti-admin": {
      id: "decti-admin",
      title: "Sistema de Administración",
      description: "Sistema para administrar el funcionamiento, reservas del COWORK, noticias y cursos de DECTI.",
      url: "https://decti.msm.gov.ar/admin",
      stack1: "laravel.png",
      stack2: "html.png",
      stack3: "js.png",
      stack4: "css.png"

    },

  };

  const handleProjectChange = (projectName) => {
    setProject(projectName);
  }

  return (
    <div className="projects" id="projects">
      {<div className="projects-title">
        <h1 data-aos="fade-in">  {'< Proyectos />'}  </h1>
      </div>}

      <div className="projects-container">

        <div className="projects-right" data-aos="fade-in">
     

            {
              projectsData[project] &&
              (
                <div className="project-info project-selected" id={projectsData[project].id}>
                  {<iframe src={projectsData[project].url}></iframe>}
                </div>
              )
            }

        </div>

        <div className="projects-left" data-aos="fade-up">

          {Object.keys(projectsData).map((projectName) => (
            <div
              key={projectName}
              className={`project-card ${projectName === project ? "selected" : ""}`}
              onClick={() => handleProjectChange(projectName)}

            >
              <div className="link-container">

                <h1>{projectsData[projectName].title}</h1>
                <a href={projectsData[projectName].url} target="_blank" rel=" noreferrer">
                  <img src="ojo.png" alt="ver"/>
                </a>

              </div>

              <p>{projectsData[projectName].description}</p>
              <div className="project-icon">

                <img src={`/${projectsData[projectName].stack1}`} alt={projectName} />
                <img src={`/${projectsData[projectName].stack2}`} alt={projectName} />
                <img src={`/${projectsData[projectName].stack3}`} alt={projectName} />
                <img src={`/${projectsData[projectName].stack4}`} alt={projectName} />



              </div>


            </div>

          ))}
        </div>





      </div>


    </div>

  );
}


export default Projects;