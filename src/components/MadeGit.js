import React, { Component } from 'react';

class MadeGit extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <img src={this.props.gitsrc} className="github-stats" />
      </a>
    )
  }
}


export default MadeGit;
