import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.jsx';
import About from './about';
import Work from './Work';
import Information from './information';
import Menu from './Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Information />
    <Menu />
    <Home />
    <About />
    <Work />
  </React.StrictMode>
);

