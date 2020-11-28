import React from 'react';
import './ResumeView.css';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import Resume from '../../components/Resume/Resume';

const ResumeView = () => {
  return(
    <div className='view resume-view'>
    <ViewHeader
      title='Online Resume'
      text={`Here is my online resume. `}
    />
    <Resume />
    </div>
  )
}

export default ResumeView;
