import React from 'react';
import './ViewHeader.css';

const ViewHeader = ({title, text}) => {
  return(
    <div className='view-header'>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default ViewHeader;
