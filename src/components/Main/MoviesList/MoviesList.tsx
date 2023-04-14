import React from 'react';
import { MovieCard } from './MovieCard';
import { StyledMovies } from './MovieList.styled';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  rating: number;
  vote_count: number;
  year: number;
  large_cover_image: string;
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
  console.log(movieList);
  return (
    <StyledMovies>
      {movieList.map(({ id, year, title, large_cover_image, genres, rating }: Movie) => (
        <MovieCard
          key={id}
          id={id}
          year={year}
          title={title}
          poster={large_cover_image}
          genres={genres}
          rating={rating}
        />
      ))}
    </StyledMovies>
  );
};
