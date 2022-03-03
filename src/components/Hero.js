import React, { Component } from 'react';
import Code from '../statics/code.jpg';
import Code_m from '../statics/code-mobile.jpg';

class Hero extends Component {
  render() {
    return (
      <div className="hero bg-visual size-full-height">
        <div className="hero-body">
          <h1 className="size-headline text-light">I'm risuney!</h1>
          <p className="size-4 text-dark-light">HTML | CSS | JS</p>
        </div>
        <div className="hero-visual-overlay"></div>
        <img src={Code} className="hero-visual not-mobile" alt="hero" />
        <img src={Code_m} className="hero-visual only-mobile" alt="Hero" />
      </div>
    );
  }
}

export default Hero;
