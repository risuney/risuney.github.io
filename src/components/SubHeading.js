import React, { Component } from 'react';

class SubHeading extends Component {
  render() {
    return <h2 className="size-2 text-subheading text-bold">{this.props.text}</h2>
  }
}


export default SubHeading;
