import React, {useState, useEffect} from 'react';
import './Testimonials.css';
import testimonialList from './testimonialList.js';
const Testimonials = () => {
  const [ index, setIndex ] = useState(0);
  const [ testimonial, setTestimonial ] = useState('');

  useEffect(() => {
    setTestimonial(testimonialList[index]);
  }, [index])

  const changeTestimonial = () => {
    if(index < testimonialList.length - 1)
      setIndex(index+1)
    else
      setIndex(0)
  }
  return(
    <div className='testimonials-section'>
      <h3 className='heading3'>Testimonials</h3>
      <div className='testimonial-card' onClick={() => changeTestimonial()}>
        <div className='testimonial'>
          <div className='testimonial-card-text'>
            "{testimonial.testimonial}"
          </div>
          <div className='testimonial-card-signature'>
            - {testimonial.name}
            <span className='text-secondary'> | {testimonial.title}</span>
          </div>
        </div>
        <div className='testimonial-card-dots'>
          <div className={index === 0 ? 'dot-active' : 'dot' }></div>
          <div className={index === 1 ? 'dot-active' : 'dot' }></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
