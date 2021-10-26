import React from 'react';
import { Search } from 'Components/Search';

import style from './Header.module.scss';

export interface SearchTag {
  label: string;
  type: string;
}

const searchTags: SearchTag[] = [
  { label: 'title', type: 'title' },
  { label: 'genre', type: 'genres' },
];

export const Header: React.FC = ({ onChange, onClick, activeCategory, handleSubmit }) => (
  <header className={style.header}>
    <p className={style.title}>Movieroulette</p>
    <Search
      searchTags={searchTags}
      onChange={onChange}
      onClick={onClick}
      activeCategory={activeCategory}
      handleSubmit={handleSubmit}
    />
  </header>
);
