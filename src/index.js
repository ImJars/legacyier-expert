import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.jsx';
import Header from './header';
import About from './about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <About />
  </React.StrictMode>
);

