import React from 'react';
import './SocialMediaIcons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return(
    <ul className='social-media-icons'>
      <li>
        <a href='https://www.linkedin.com/in/carl-christian-solli-237378171/' target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className='icon'/>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/carl_solli/' target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" className='icon'/>
        </a>
      </li>
      <li>
        <a href='https://github.com/albonkey' target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" className='icon'/>
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/carlchristian.dokkensolli' target="_blank">
          <FontAwesomeIcon icon={faFacebook} size="2x" className='icon'/>
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com/channel/UCw8X3j6TUSH5oFWAqcZAXFQ' target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" className='icon'/>
        </a>
      </li>
    </ul>
  )
}

export default SocialMediaIcons;
