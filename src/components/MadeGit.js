import React, { Component } from 'react';

class MadeGit extends Component {
  render() {
    return (
      <a href={`https://github.com/risuney/${this.props.repoName}`} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=${this.props.repoName}&theme=dark&hide_border=true`} className="github-stats"
        />
      </a>
    )
  }
}


export default MadeGit;
