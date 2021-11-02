import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { Loader } from 'Components/common/Loader';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

import style from './Main.module.scss';

export interface FilterTag {
  label: string;
  type: string;
}

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

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];

export interface MainProps {
  handleFilterClick?(data?: string): () => void;
  searchValue: string;
}

export const Main: React.FC<MainProps> = ({ searchValue }) => {
  const { isLoading, error, movies, filter, category } = useSelector(
    (state: RootState) => state.searchMovieReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(filter, category, searchValue));
  }, [fetchMovies]);

  const renderMovieList = () => {
    if (error && error instanceof Error) {
      return <h2 className={style.error}>{error.message}</h2>;
    }
    if (isLoading) {
      return <Loader />;
    }

    if (!movies.length) {
      return <h2 className={style.title}>No films found</h2>;
    }
    return <MoviesList movieList={movies} />;
  };

  return (
    <main className={style.main}>
      <MoviesFilter filterTags={filterTags} searchValue={searchValue} />
      {renderMovieList()}
    </main>
  );
};
