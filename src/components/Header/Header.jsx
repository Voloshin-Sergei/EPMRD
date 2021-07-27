import React from 'react';
import { Search } from '../Search';

import style from './Header.module.scss';

export const Header = () => (
  <header className={style.header}>
    <p className={style.title}>Movieroulette</p>
    <Search />
  </header>
);
