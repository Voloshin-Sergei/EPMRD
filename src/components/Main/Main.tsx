import React from 'react';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

import style from './Main.module.scss';

export interface FilterTag {
  text: string;
  type: string;
}

const filterTags: Array<FilterTag> = [
  { text: 'release date', type: 'release_date' },
  { text: 'rating', type: 'vote_average' },
];

export const Main: React.FC = () => (
  <main className={style.main}>
    <MoviesFilter filterTags={filterTags} />
    <MoviesList />
  </main>
);
