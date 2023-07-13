import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header" style={{ background: 'red' }}>
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
