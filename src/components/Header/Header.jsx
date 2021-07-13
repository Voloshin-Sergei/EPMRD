import React from 'react';
import Search from './Search/Search.jsx';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <p className={style.title}>Movieroulette</p>
    <Search />
  </header>
);

export default Header;
