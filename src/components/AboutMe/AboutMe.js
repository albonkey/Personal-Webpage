import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import img from '../../assets/img22.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faFolderOpen, faFileAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';
const AboutMe = () => {
  return(
    <div className='about-me-section'>
      <div className='bio'>
        <h2>Carl Solli</h2>
        <div className='undertext'>Computer Science Student</div>
        <p className='paragraph-small'>
          I'm a highly motivated Computer Science student, looking for places to further
          develop my craft.
          Want to see if I'm a good fit for your organization? Take a look at some of my personal projects
          and online resume.
        </p>
        <div className='action-buttons-container'>
          <Link to='/portfolio'>
            <button>
              <FontAwesomeIcon icon={faFolderOpen} className='btn-icon' />
              View Portfolio
            </button>
          </Link>
          <button>
            <FontAwesomeIcon icon={faFileAlt} className='btn-icon' />
            View Resume
          </button>
        </div>
      </div>
      <img src={img}/>

    </div>
  )
}

export default AboutMe;
