import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';


const Footer = () => {
  return(
    <footer className='footer'>
        <h1>Life's short. Enjoy it.</h1>
        <nav className='footer-nav'>
          <ul>
            <li className='list-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='list-item'>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li className='list-item'>
              <Link to='/resume'>Resume</Link>
            </li>
            <li className='list-item'>
                <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        <p>Once upon a time there was a little boy from Norway...</p>
    </footer>
  )
}

export default Footer;
