import React from 'react';
import { Link } from 'react-router-dom';
import './SideHeader.css';
import img from '../../assets/img-02.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faFolderOpen, faFileAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
const SideHeader = () => {
  return (
    <header className='side-header'>
      <input type="checkbox" id="btnControl"/>
      <label htmlFor="btnControl" className='menu-btn'><FontAwesomeIcon icon={faBars} size='2x' /></label>
      <h1>Carl Solli</h1>
      <nav className='nav-bar'>
        <div className='profile-section'>
          <img src={img} />
          <p className='bio'>
            Hey, my name is Carl. I'm a Computer Science student at California State University of Los Angeles.
          </p>
          <SocialMediaIcons />
        </div>
        <div className='navigation-section'>
          <ul>
            <Link to="/">
              <li className='list-item'>
                <FontAwesomeIcon icon={faUser} className='nav-icon' />
                About Me
              </li>
            </Link>
            <Link to="/portfolio">
              <li className='list-item'>
                <FontAwesomeIcon icon={faFolderOpen}className='nav-icon' />
                Portfolio
              </li>
            </Link>
            <Link to="/resume">
              <li className='list-item'>
                <FontAwesomeIcon icon={faFileAlt}className='nav-icon' />
                Resume
              </li>
            </Link>
            <Link to="/contact">
              <li className='list-item'>
                <FontAwesomeIcon icon={faAddressBook}className='nav-icon' />
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default SideHeader;
