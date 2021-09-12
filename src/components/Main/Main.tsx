import React from 'react';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

export enum FilterTags {
  Release = 'release',
  Date = 'date',
  Rating = 'rating',
}

const filterTags = [FilterTags.Release, FilterTags.Date, FilterTags.Rating];

export const Main: React.FC = () => (
  <>
    <MoviesFilter filterTags={filterTags} />
    <MoviesList />
  </>
);
