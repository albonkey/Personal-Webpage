import React from 'react';
import './HomeView.css';
import TopHeader from '../../components/TopHeader/TopHeader';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import DeeperBio from '../../components/DeeperBio/DeeperBio';
import Testimonials from '../../components/Testimonials/Testimonials';

import { Link } from 'react-router-dom';

const HomeView = () => {
  return(
    <div className='home-view'>
      <div className='hook'>
        <h1 className='white-background'>HEY, WHAT'S UP?</h1>
        <h2 className='white-background'>I'm Carl Solli.</h2>
        <p className='white-background'>Software Developer</p>
        <div className='hook-button-container'>
          <Link to='/portfolio'>
            <button className='button-hook'>
              View Portfolio
            </button>
          </Link>
          <Link to='/resume'>
            <button className='button-hook'>
              View Resume
            </button>
          </Link>
        </div>
        <div className='social-media-container'>
          <SocialMediaIcons />
        </div>
      </div>
      <DeeperBio />
      <div className='testimonial-section'>
        <Testimonials />
      </div>
      <div className='contact-section'>
        <h2>Interested in working together?</h2>
        <p>I'm always interested in working and connecting with new people. Have an interesting project, our just wanna share ideas? </p>
        <Link to='/contact'>
          <button className='contact-section-button'>Message me</button>
        </Link>
      </div>

    </div>
  )
}

export default HomeView;
