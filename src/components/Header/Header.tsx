import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';
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
  filter: string;
}

export const Header: React.FC<HeaderProps> = ({ filter }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('title');

  const handleSubmit = () => {
    dispatch(fetchMovies(filter, category, searchValue));
  };

  const handleChange = (inputSearchValue: string) => {
    setSearchValue(inputSearchValue);
  };

  const handleCategoryClick = (searchCategory: string) => () => {
    setCategory(searchCategory);
  };
  return (
    <header className={style.header}>
      <p className={style.title}>Movieroulette</p>
      <Search
        searchTags={searchTags}
        handleChange={handleChange}
        handleCategoryClick={handleCategoryClick}
        activeCategory={category}
        handleSubmit={handleSubmit}
      />
    </header>
  );
};
