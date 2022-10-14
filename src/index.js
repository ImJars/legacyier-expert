import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import Information from './information';
import Home from './Home';
import Example from './components/side-menu/Example';
import LayoutScroll from './layoutScroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Information />
    <Home/>
    <LayoutScroll />
    
    <Example />
  </React.StrictMode>
);

