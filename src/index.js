import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.jsx';
import Header from './header';
import About from './about';
import Work from './Work';
import Information from './information';
import HamburguerMenu from './components/HamburguerMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Information />
    <Header />
    <Home />
    <About />
    <Work />
  </React.StrictMode>
);

