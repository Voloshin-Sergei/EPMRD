import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../../redux/actions/searchMovieAction';
import { MovieCard } from './MovieCard';
import { RootState } from '../../../redux/reducers';
import style from './MoviesList.module.scss';

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

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  const movieList: Movie[] = useSelector((state: RootState) => state.searchMovieReducer.movies);
  useEffect(() => {
    dispatch(setMovies());
  }, []);

  return (
    <section className={style.movies}>
      {!movieList.length && <h2>No films found</h2>}
      {movieList.map((movie: Movie) => (
        <MovieCard
          key={movie.id}
          year={movie.release_date}
          title={movie.title}
          poster={movie.poster_path}
          genres={movie.genres}
        />
      ))}
    </section>
  );
};
