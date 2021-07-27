import React, { Component } from 'react';

class FooterLink extends Component {
  render() {
    return (
      <a href={this.props.href} className="sns-icon" target="_blank" rel="noopener noreferrer">
        <img src={this.props.imgsrc} />
      </a>
    );
  }
}

export default FooterLink;
