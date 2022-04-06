import React from 'react'
import learningSite from "../images/study.jpeg";
import learningTime from "../images/clock.jpeg";
import github from "../images/github.png";


const WorksPage = () => {
  return (
   <div className='container text-center'>
      
        <div className='row text-center sec'>
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
        <div className='row text-center sec'>
        <h1 className='heading'>github</h1>
         <div className='cards'>
            <a href="https://github.com/natsu7232" className='a-no'>
              <div className='col-md-6 card'>
              
                <img className="icon" src={github} alt="..." />
                <h4 className="my-3 kosugi">github</h4>
                <ul>
                  <li className="text-muted kosugi">ログイン機能(laravel)</li>
                  <li className="text-muted kosugi">ログイン機能(php)</li>
                  <li className="text-muted kosugi">ブログ(laravel)</li>
                  <li className="text-muted kosugi">studyWatch(javascript)</li>
                  <li className="text-muted kosugi">riristudy(php)</li>
                  <li className="text-muted kosugi">portfolio(react)</li>
                </ul>
              </div>
            </a>
          </div>
        </div>

    </div>

  )
}

export default WorksPage