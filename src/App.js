import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopHeader from './components/TopHeader/TopHeader';
import Footer from './components/Footer/Footer';
import PortfolioView from './views/PortfolioView/PortfolioView';
import ResumeView from './views/ResumeView/ResumeView';
import ContactView from './views/ContactView/ContactView';
import HomeView from './views/HomeView/HomeView';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>Carl Solli</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <ScrollToTop />
        <TopHeader />
        <Route path='/portfolio' component={PortfolioView} />
        <Route path='/resume' component={ResumeView} />
        <Route path='/contact' component={ContactView} />
        <Route path='/' exact={true}  component={HomeView} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
