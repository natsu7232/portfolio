import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import icon from "../images/girl.png";
import php from "../images/php_P.png";
import laravel from "../images/laravel.png";
import mysql from "../images/mysql.png";
import javascript from "../images/js.png";
import react from "../images/react.png";
import html from "../images/html.png";
import css from "../images/css.png";
import java from "../images/java.jpeg";


Modal.setAppElement('#root')
const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
  <div className="container text-center">
    <section className="page-section">
    <div className="container">
        <div className="text-center">
        <img className="main-icon" src={icon} alt="..." />
        <h2 className="section-heading text-uppercase name">NATSUMI IWAMOTO</h2>
        <p className="section-subheading text-muted">大阪生まれ大阪育ち、1995年生まれの２６歳です。今年の１月からプログラグラミング学習を始めました。</p>
        <p className="section-heading text-primary">※このサイトは個人情報を含むため名前はローマ字で表記させていただいております。ご了承ください。</p>
        </div>
        
    </div>
</section>

<section id="skill">
        <div className="text-center">
          <h1 className="heading">skill</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img  className="skill" src={php} />
              <h4>php</h4>
              <p>phpがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img  className="skill" src={laravel} />
              <h4>laravel</h4>
              <p>laravelがつかえます</p>
            </div>
            <div className="col-md-4 services">
              <img  className="skill" src={mysql} />
              <h4>mysql</h4>
              <p>mysqlがつかえます</p>
            </div>
          </div>
          <button className='border_bottom caveat' onClick={() => setModalIsOpen(true)}>skill list</button>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className=" text-center">
              <h1 className='heading'>skill list</h1>
              <img  className="skillList col-md-4" src={php} />
              <img  className="skillList col-md-4" src={laravel} />
              <img  className="skillList col-md-4" src={mysql} />
              <img  className="skillList col-md-4" src={html} />
              <img  className="skillList col-md-4" src={css} />
              <img  className="skillList col-md-4" src={javascript} />
              <img  className="skillList col-md-6" src={react} />
              <img  className="skillList col-md-6" src={java} />
              <button className='border_bottom caveat' onClick={() => setModalIsOpen(false)}>close</button>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  )
}

export default HomePage