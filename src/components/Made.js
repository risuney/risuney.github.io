import React, { Component } from 'react';
import SubHeading from './SubHeading';
import MadeCard from './MadeCard';
import MadeGit from './MadeGit';
import Kanban from '../statics/kanban-board.png'
import Kirinuku from '../statics/KIRINUKU.png'
import Photo from '../statics/photo-compression.png'
import Qr from '../statics/qr-code.png'

class Made extends Component {
  render() {
    return (
      <section className="section bg-dark center">
        <SubHeading text="What I made" />
        <div className="not-mobile">
          <div className="cards">
            <MadeCard
              href="molecule-css"
              imgsrc="https://raw.githubusercontent.com/risuney/molecule-css/main/docs/src/static/logo/og-logo.png"
              name="MoleculeCSS"
              exp="Simple and modern CSS framework"
            />
            <MadeCard
              href="kanban-board"
              imgsrc={Kanban}
              name="Kanban board"
              exp="This is Kanban"
            />
            <MadeCard
              href="ramen-timer"
              imgsrc="https://raw.githubusercontent.com/risuney/ramen-timer/main/static/logo-ogp.png"
              name="Ramen Timer"
              exp="ラーメンたちを美味しく作るためのタイマーです"
            />
          </div>
          <div className="cards">
            <MadeCard
              href="KIRINUKU"
              imgsrc={Kirinuku}
              name="KIRINUKU"
              exp="A tool for cutting images into circles and rounded corners"
            />
            <MadeCard
              href="photo-compression"
              imgsrc={Photo}
              name="Photo compression"
              exp="写真を圧縮"
            />
            <MadeCard
              href="qr-code"
              imgsrc={Qr}
              name="QR Code"
              exp="QRコードの作成"
            />
          </div>
        </div>
        <div className="only-mobile">
          <MadeGit repoName="molecule-css" />
          <MadeGit repoName="kanban-board" />
          <MadeGit repoName="ramen-timer" />
          <MadeGit repoName="KIRINUKU" />
          <MadeGit repoName="photo-compression" />
          <MadeGit repoName="qr-code" />
        </div>
      </section>
    );
  }
}

export default Made;
