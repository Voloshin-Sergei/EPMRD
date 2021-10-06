import React from 'react';
import { MovieCard } from './MovieCard';
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

export interface MovieListProps {
  movieList: Movie[];
}

export const MoviesList: React.FC<MovieListProps> = ({ movieList }) => {
  return (
    <>
      {!movieList.length && <h2 className={style.title}>No films found</h2>}
      <section className={style.movies}>
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
    </>
  );
};
