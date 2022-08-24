import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.jsx';
import Header from './header';
import About from './about';
import Portafolio from './Portafolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <About />
    <Portafolio/>
  </React.StrictMode>
);

