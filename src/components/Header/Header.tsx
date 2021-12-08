import React from 'react';
import { Search } from 'Components/Search';
import { MoviesFilter } from 'Components/Header/MoviesFilter';
import style from './Header.module.scss';

export interface SearchTag {
  label: string;
  type: string;
}

const searchTags: SearchTag[] = [
  { label: 'title', type: 'title' },
  { label: 'genre', type: 'genres' },
];

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];
export interface FilterTag {
  label: string;
  type: string;
}

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <p className={style.title}>Movieroulette</p>
      <Search searchTags={searchTags} />
      <MoviesFilter filterTags={filterTags} />
    </header>
  );
};
