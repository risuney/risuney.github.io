import React, { Component } from 'react';
import FooterLink from './FooterLink';
import Twitter from '../statics/twitter-logo.svg';
import Instagram from '../statics/Instagram_Glyph_Gradient_RGB.png';
import GitHub from '../statics/GitHub-Mark-Light-120px-plus.png';
import Qiita from '../statics/Qiita.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <div className="sns">
          <FooterLink href="https://twitter.com/risuney" imgsrc={Twitter} />
          <FooterLink href="https://www.instagram.com/risuney" imgsrc={Instagram} />
          <FooterLink href="https://github.com/risuney" imgsrc={GitHub} />
          <FooterLink href="https://qiita.com/risuney" imgsrc={Qiita} />
        </div>
        <p className="size-footer-text footer-copy-right text-center text-light">Copyright © 2021 risuney All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
