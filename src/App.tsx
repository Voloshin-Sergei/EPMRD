import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';

import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';

import './style.scss';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
}

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.searchMovieReducer);

  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('title');
  const [filter, setFilter] = useState('release_date');

  const handleFilterClick = (filter: string) => () => {
    setFilter(filter);
    handleSubmit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryClick = (category: string) => () => {
    setCategory(category);
  };

  const handleSubmit = () => {
    dispatch(fetchMovies(filter, category, searchValue));
  };

  useEffect(() => {
    dispatch(fetchMovies(filter, category, searchValue));
  }, [fetchMovies, filter]);

  return (
    <ErrorBoundary>
      <Header
        onChange={handleChange}
        onClick={handleCategoryClick}
        activeCategory={category}
        handleSubmit={handleSubmit}
      />
      <Main onClick={handleFilterClick} activeFilter={filter} movies={movies} />
      <Footer />
    </ErrorBoundary>
  );
};
