import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';

import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';

import './style.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('title');
  const [filter, setFilter] = useState('release_date');

  const handleFilterClick = (filter: string) => () => {
    setFilter(filter);
    handleSubmit();
  };

  const handleChange = (inputValue: string) => {
    setSearchValue(inputValue);
  };

  const handleCategoryClick = (category: string) => () => {
    setCategory(category);
  };

  const handleSubmit = () => {
    dispatch(fetchMovies(filter, searchValue));
  };

  return (
    <ErrorBoundary>
      <Header
        onChange={handleChange}
        onClick={handleCategoryClick}
        activeCategory={category}
        handleSubmit={handleSubmit}
      />
      <Main onClick={handleFilterClick} activeFilter={filter} />
      <Footer />
    </ErrorBoundary>
  );
};
