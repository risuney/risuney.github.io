import React, { Component } from 'react';

class MadeCard extends Component {
  render() {
    return (
      <a href={`https://github.com/risuney/${this.props.href}`} className="card size-medium has-visual" target="_blank" rel="noopener noreferrer">
        <div className="card-visual">
          <img src={this.props.imgsrc} />
        </div>
        <div className="card-body">
          <p className="size-4">{this.props.name}</p>
          <p>{this.props.exp}</p>
        </div>
      </a>
    )
  }
}

export default MadeCard;
