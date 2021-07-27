import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Made from './components/Made';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <About />
    <Made />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
