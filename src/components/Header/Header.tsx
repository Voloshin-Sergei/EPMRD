import React from 'react';
import { Search } from 'Components/Search';

import style from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={style.header}>
    <p className={style.title}>Movieroulette</p>
    <Search />
  </header>
);
