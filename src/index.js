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
import Example from './components/side-menu/Example';
import ScrollMenu from './scrollMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Information />
    <ScrollMenu />
    <Home/>
    <About />
    <Experience />
    <Work />
    <OtherWorks />
    <Contact />
    <Example />
  </React.StrictMode>
);

