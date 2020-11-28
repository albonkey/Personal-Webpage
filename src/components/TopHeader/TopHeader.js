import React, { useState } from 'react';
import './TopHeader.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faFolderOpen, faFileAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const TopHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100){
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }
  window.addEventListener('scroll', changeBackground);

  return(
    <header className={navbar ? 'top-header active' : 'top-header'}>
      <input type="checkbox" id="btnControl"/>
      <label htmlFor="btnControl" className='menu-btn'><FontAwesomeIcon icon={faBars} size='2x' /></label>
      <Link to='/'>
        <div className='logo-container'>
          <img src={require('../../assets/logo1.png').default} className='logo' />
        </div>
      </Link>
      <nav>
        <ul>
          <Link to='/' className='list-item'>
            <li>
                Home
              </li>
          </Link>
          <Link to='/portfolio' className='list-item'>
            <li>
              Portfolio
            </li>
          </Link>
          <Link to='/resume' className='list-item'>
            <li>
              Resume
            </li>
          </Link>
          <Link to='/contact' className='list-item action-button'>
            <li>
                Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default TopHeader;
