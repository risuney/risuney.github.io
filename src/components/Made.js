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
              href="https://github.com/risuney/molecule-css"
              imgsrc="https://github.com/risuney/molecule-css/raw/main/docs/static/logo/og-logo.jpeg"
              name="Molecule"
              exp="CSS like a molecule"
            />
            <MadeCard
              href="https://github.com/risuney/kanban-board"
              imgsrc={Kanban}
              name="Kanban board"
              exp="This is Kanban"
            />
            <MadeCard
              href="https://github.com/risuney/ramen-timer"
              imgsrc="https://raw.githubusercontent.com/risuney/ramen-timer/main/static/logo-ogp.png"
              name="Ramen Timer"
              exp="ラーメンたちを美味しく作るためのタイマーです"
            />
          </div>
          <div className="cards">
            <MadeCard
              href="https://github.com/risuney/KIRINUKU"
              imgsrc={Kirinuku}
              name="KIRINUKU"
              exp="A tool for cutting images into circles and rounded corners"
            />
            <MadeCard
              href="https://github.com/risuney/photo-compression"
              imgsrc={Photo}
              name="Photo compression"
              exp="写真を圧縮"
            />
            <MadeCard
              href="https://github.com/risuney/qr-code"
              imgsrc={Qr}
              name="QR Code"
              exp="QRコードの作成"
            />
          </div>
        </div>
        <div className="only-mobile">
          <MadeGit
            href="https://github.com/risuney/molecule-css"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=molecule-css&theme=dark&hide_border=true"
          />
          <MadeGit
            href="https://github.com/risuney/kanban-board"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=kanban-board&theme=dark&hide_border=true"
          />
          <MadeGit
            href="https://github.com/risuney/ramen-timer"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=ramen-timer&theme=dark&hide_border=true"
          />
          <MadeGit
            href="https://github.com/risuney/KIRINUKU"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=KIRINUKU&theme=dark&hide_border=true"
          />
          <MadeGit
            href="https://github.com/risuney/photo-compression"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=photo-compression&theme=dark&hide_border=true"
          />
          <MadeGit
            href="https://github.com/risuney/qr-code"
            gitsrc="https://github-readme-stats.vercel.app/api/pin/?username=risuney&repo=qr-code&theme=dark&hide_border=true"
          />
        </div>
      </section>
    );
  }
}

export default Made;
