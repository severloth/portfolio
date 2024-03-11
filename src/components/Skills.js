import React, { useRef } from 'react';
import IsVisible from 'react-is-visible';
import skillsData from '../data/skills.json'; // Cambia la importación
import useContainerDimensions from '../hooks/useContainerDimensions';

const Skills = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);
  const skills = skillsData.skills;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
      <IsVisible once>
        {(isVisibleSkillsWrapper) => (
          <div
            className="skills-wrapper"
            style={
              isVisibleSkillsWrapper
                ? {
                    transition: '1s opacity ease-in-out',
                    transform: 'translateY(0)',
                    opacity: 1,
                  }
                : {}
            }
          >
            <h2>Skills</h2>
            <br></br>
            
            <ul className="skills" ref={skillsWrapper}>
              {skills.map((skill) => (
                <li className="skill-bar-wrapper" key={skill.skillName}>
                  <div
                    className="skill-bar"
                    style={
                      isVisibleSkillsWrapper
                        ? {
                            transition: `${
                              1 + skill.id / 10
                            }s width ease-in-out`,
                            width: width * (skill.amount / 100),
                          }
                        : {
                            width: 1,
                          }
                    }
                  ></div>
                  <div className="skill-name">{skill.skillName}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </IsVisible>
    </div>
  );
};

export default Skills;
