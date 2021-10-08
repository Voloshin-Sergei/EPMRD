import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { Loader } from 'Components/common/Loader';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

import style from './Main.module.scss';

export interface FilterTag {
  text: string;
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

const filterTags: Array<FilterTag> = [
  { text: 'release date', type: 'release_date' },
  { text: 'rating', type: 'vote_average' },
];

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, movies } = useSelector((state: RootState) => state.searchMovieReducer);

  useEffect(() => {
    dispatch(setMovies());
  }, []);

  return (
    <main className={style.main}>
      <MoviesFilter filterTags={filterTags} />
      {error ? (
        <h2 className={style.error}>{error}</h2>
      ) : loading ? (
        <Loader />
      ) : (
        <MoviesList movieList={movies} />
      )}
    </main>
  );
};
