import React from 'react';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

export interface FilterTag {
  text: string;
  type: string;
}

const filterTags: Array<FilterTag> = [
  { text: 'release date', type: 'release_date' },
  { text: 'rating', type: 'vote_count' },
];

export const Main: React.FC = () => (
  <>
    <MoviesFilter filterTags={filterTags} />
    <MoviesList />
  </>
);
