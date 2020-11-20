import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SideHeader from './components/SideHeader/SideHeader';
import MainView from './views/MainView/MainView';
import PortfolioView from './views/PortfolioView/PortfolioView';
import ResumeView from './views/ResumeView/ResumeView';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideHeader />
        <Route path='/portfolio' component={PortfolioView} />
        <Route path='/resume' component={ResumeView} />
        <Route path='/' exact={true}  component={MainView} />
      </div>
    </BrowserRouter>

  );
}

export default App;
