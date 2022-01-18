import React from 'react';
import { MovieCard } from './MovieCard';
import { StyledMovies } from './MovieList.styled';

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
    <StyledMovies>
      {movieList.map(({ id, release_date, title, poster_path, genres, vote_average }: Movie) => (
        <MovieCard
          key={id}
          id={id}
          year={release_date}
          title={title}
          poster={poster_path}
          genres={genres}
          rating={vote_average}
        />
      ))}
    </StyledMovies>
  );
};
