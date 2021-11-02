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

export interface HeaderProps {
  handleChange: (data: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ handleChange }) => {
  return (
    <header className={style.header}>
      <p className={style.title}>Movieroulette</p>
      <Search searchTags={searchTags} handleChange={handleChange} />
    </header>
  );
};
