import React from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';
import DeeperBio from '../../components/DeeperBio/DeeperBio';
import Testimonials from '../../components/Testimonials/Testimonials';

const MainView = () => {
  return(
    <div className='view'>
      <AboutMe />
      <DeeperBio />
      <Testimonials />
    </div>
  )
}


export default MainView;
