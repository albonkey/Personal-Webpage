import React from 'react';
import './ContactView.css';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactView = () => {
  return(
    <div className='contact-view'>
        <div className='contact-section'>
          <ContactForm />
        </div>
    </div>
  )
}

export default ContactView;
