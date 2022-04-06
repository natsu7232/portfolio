import React from 'react'
import serious from "../images/serious.png";
import Imagination from "../images/Imagination.png";
import action from "../images/action.png";
import communication from "../images/communication.png";


const SelfPage = () => {
  return (
    <div className='container text-center'>
      <div className='row text-center'>
        <h1 className='heading'>PR</h1>
          <div className='col-md-6'>
            <img className="icon" src={serious} alt="..." />
            <h4 className="my-3 kosugi">真面目</h4>
            <p className="text-muted kosugi"></p>
          </div>
          <div className='col-md-6 '>
            <img className="icon" src={Imagination} alt="..." />
            <h4 className="my-3 kosugi">想像力</h4>
            <p className="text-muted kosugi"></p>
          </div> 
          <div className='col-md-6 '>
            <img className="icon" src={action} alt="..." />
            <h4 className="my-3 kosugi">行動力</h4>
            <p className="text-muted kosugi"></p>
          </div> 
          <div className='col-md-6 '>
            <img className="icon" src={communication} alt="..." />
            <h4 className="my-3 kosugi">コミュニケーション力</h4>
            <p className="text-muted kosugi"></p>
          </div> 
      </div>
    </div>
        
  )
}

export default SelfPage