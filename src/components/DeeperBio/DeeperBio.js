import React, { useState } from 'react';
import './DeeperBio.css';
import img from '../../assets/img.jpg';


const DeeperBio = () => {
  const images = [ 'img-01.jpg', 'img-02.jpg', 'img-03.jpg', 'img-04.jpg', 'img-05.jpg', 'img-06.jpg', 'img-07.jpg', 'img-08.jpg', 'img-09.jpg' ];
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[3]);
  const [hoverImage, setHoverImage] = useState(false);

  const nextImage = () => {
    if(index < images.length-1){
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setImage(images[index]);

  }

  if(hoverImage){
    setTimeout(nextImage, 500);
  }

  return(
    <div className='deeper-bio'>
        <div className='deeper-bio-text'>
          <h3 className='heading3'>My Story</h3>
          <p className='paragraph-small'>
            My name is Carl Solli. The fall of 2018 I moved
            from my small town in Norway
            to <span className='bold-word'>Los Angeles</span>, California to pursue a degree in
            Computer Science.
          </p>

          <p className='paragraph-small'>
            I’ve always had a desire to <span className='bold-word'>create</span> and I learned
            early on the incredible things the computer has to offer.
          </p>
          <p className='paragraph-small'>
            Through my passion for soccer I have gained an understanding of the <span className='bold-word'>dedication</span>
            , <span className='bold-word'>hard work</span> and discipline it takes to become successful.
            It has allowed me to work on my <span className='bold-word'>communication </span> and form deep connections
            with my teammates.
            Soccer has opened up opportunites to travel the world and experience new cultures,
            making <span className='bold-word'>friends</span> for life along the way.<br />
          </p>
          <p className='paragraph-small'>
            Through journeys to different countries and a love for reading I have become
            a well <span className='bold-word'>reflected</span> person. It has given me unique
            perspectives on different topics. I’m a firm believer
            that you should never stop <span className='bold-word'>learning</span>.
          </p>
        </div>

    </div>
  )
}

export default DeeperBio;
