import React from 'react';
import { MovieCard } from './MovieCard';
import { StyledMovies } from './MovieList.styled';
import { Movie } from '../Main';
import { Pagination } from 'Components/Pagination';

export interface MovieListProps {
  movieList: Movie[];
}

export const MoviesList: React.FC<MovieListProps> = ({ movieList }) => {
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
      <Pagination />
    </StyledMovies>
  );
};
