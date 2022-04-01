import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3 className='caveat'>portfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link className='caveat' to="/">top</Link>
          </li>
          <li>
            <Link className='caveat' to="/Career">works</Link>
          </li>
          <li>
            <Link className='caveat' to="/Self">PR</Link>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header