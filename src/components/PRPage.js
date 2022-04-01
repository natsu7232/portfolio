import React from 'react'
import { Button, Modal} from "react-bootstrap";
import learningSite from "../images/study.jpeg";
import learningTime from "../images/clock.jpeg";

const SelfPage = () => {


  return (
    <div className="container text-center">
      <div className="row text-center">
        <h1 className="heading">PR</h1>
            <div className="col-md-6">
              <img className="icon" src={learningSite} alt="..." /> 
            </div>
            <div className="col-md-6">
              <h4 className="my-3">学習サイト</h4>
              <p className="text-muted">子ども向けのお金について学べる学習サイトです。おつかいをテーマにして楽しくゲーム感覚でお買い物を楽しめるサイトを心がけました。</p>   
            </div>
            <div className="col-md-6">
            <h4 className="my-3">study watch</h4>
                <p className="text-muted">学習を行うにおいて、勉強を行った時間を記録するものです。デザインのこだわりも強くスマートフォンなどで表示しながら学習を行う状況を考えて制作しました。</p>
            </div>
            <div className="col-md-6">
                <img className="icon" src={learningTime} alt="..." />
            </div>
            
        </div>
 
    </div>
  )
}

export default SelfPage