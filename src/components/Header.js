import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/Career">経歴</Link>
          </li>
          <li>
            <Link to="/Self">自己PR</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header