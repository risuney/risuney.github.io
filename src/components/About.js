import React, { Component } from 'react';
import SizeArticle from './SizeArticle';
import SubHeading from './SubHeading';

class About extends Component {
  render() {
    return (
      <section className="section bg-light size-large">
        <SubHeading text="About risuney" />
        <SizeArticle text="暇をつぶすために作りたいなーと思ったものを作っている在日日本人です。たまに絵を描きますがヘタです。写真を取ることが好きです。" />
        <SizeArticle text="ReactとかPythonをやらないと休日が楽しくなさそうなのでやろうと思っています。" />
        <SizeArticle text="やっとこのページのReact化ができました" />
        <div className="imgs">
          <div className="mass-icon">
            <SizeArticle text="SNS" />
            <a href="https://twitter.com/risuney" target="_blank" rel="noopener noreferrer">
              <img
                src="https://pbs.twimg.com/media/E-ca0TSVQAULYMi?format=png&name=large"
                alt="SNS icon"
                className="img-icon"
              />
            </a>
          </div>
          <div className="mass-icon">
            <SizeArticle text="Tech" />
            <a href="https://twitter.com/tech_risuney" target="_blank" rel="noopener noreferrer">
              <img
                src="https://pbs.twimg.com/media/E8HDI7jUUAIeM6b?format=png&name=large"
                alt="Tech icon"
                className="img-icon"
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
