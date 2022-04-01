import React from 'react'
import learningSite from "../images/study.jpeg";
import learningTime from "../images/clock.jpeg";


const WorksPage = () => {
  return (
   <div className='container text-center'>
      
        <div id="sec" className='row text-center'>
          <h1 className='heading'>works</h1>
         <div className='cards'>
            <a href="https://riristudy.herokuapp.com/" className='a-no'>
              <div className='col-md-6 card'>
              
                <img className="icon" src={learningSite} alt="..." />
                <h4 className="my-3 kosugi">学習サイト</h4>
                <p className="text-muted kosugi">子ども向けのお金について学べる学習サイトです。おつかいをテーマにして楽しくゲーム感覚でお買い物を楽しめるサイトを心がけました。</p>
              </div>
            </a>
            <a href="https://natsu7232.github.io/studyWatch/" className='a-no'>
              <div className='col-md-6 card'>
                <img className="icon" src={learningTime} alt="..." />
                <h4 className="my-3 kosugi">study watch</h4>
                <p className="text-muted kosugi">学習を行うにおいて、勉強を行った時間を記録するものです。デザインのこだわりも強くスマートフォンなどで表示しながら学習を行う状況を考えて制作しました。</p>
              </div> 
            </a> 
          </div>
        </div>
        <h1 className='heading'>github</h1>

    </div>

  )
}

export default WorksPage