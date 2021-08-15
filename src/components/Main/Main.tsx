import React from 'react';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

export const Main: React.FunctionComponent = () => (
  <>
    <MoviesFilter />
    <MoviesList />
  </>
);
