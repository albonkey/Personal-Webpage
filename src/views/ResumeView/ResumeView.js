import React from 'react';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import Resume from '../../components/Resume/Resume';

const ResumeView = () => {
  return(
    <div className='view'>
    <ViewHeader
      title='Online Resume'
      text={`Here is my online resume. `}
    />
    <Resume />
    </div>
  )
}

export default ResumeView;
