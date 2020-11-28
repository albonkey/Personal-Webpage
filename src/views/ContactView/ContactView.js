import React from 'react';
import './ContactView.css';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactView = () => {
  return(
    <div className='contact-view'>
      <ViewHeader
        title={`Contact`}
        text={`Fill out the form under, and I'll get back to you as soon as I get the time.`}
        />
        <div className='contact-section'>
          <ContactForm />
        </div>
    </div>
  )
}

export default ContactView;
