import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className='head'>
        <Link to="/">Products</Link>
      </nav>
    </header>
  );
}

export default Header;
