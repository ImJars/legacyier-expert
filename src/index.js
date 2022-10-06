import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import Information from './information';
import Home from './Home';
import About from './about';
import Experience from './Experience';
import Work from './work';
import OtherWorks from './otherWorks';
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Information />
    <Home/>
    <About />
    <Experience />
    <Work />
    <OtherWorks />
    <Contact />
  </React.StrictMode>
);

