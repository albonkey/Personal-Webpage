import React from 'react';
import './Project.css';

const Project = ({title, description, learned, link, img}) => {
  return(
    <div className='project'>
      <img src={require(`../../assets/${img}`).default} />
      <div className='project-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{learned}</p>
        <a href={link}>Github</a>
      </div>

    </div>
  )
}

export default Project;
