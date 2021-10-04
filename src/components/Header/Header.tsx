import React from 'react';
import { Search } from 'Components/Search';

import style from './Header.module.scss';

export interface SearchTag {
  text: string;
  type: string;
}

const searchTags: Array<SearchTag> = [
  { text: 'title', type: 'title' },
  { text: 'genre', type: 'genres' },
];

export const Header: React.FC = () => (
  <header className={style.header}>
    <p className={style.title}>Movieroulette</p>
    <Search searchTags={searchTags} />
  </header>
);
