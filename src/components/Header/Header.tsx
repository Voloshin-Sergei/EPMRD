import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Search } from 'Components/Search';
import { MoviesFilter } from 'Components/Header/MoviesFilter';
import { MovieInfo } from './MovieInfo';
import style from './Header.module.scss';

export interface SearchTag {
  label: string;
  type: string;
}

const searchTags: SearchTag[] = [
  { label: 'title', type: 'title' },
  { label: 'genre', type: 'genres' },
];

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];
export interface FilterTag {
  label: string;
  type: string;
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Header: React.FC = () => {
  const query = useQuery();

  console.log(query.get('title'));

  return (
    <header className={style.header}>
      <Switch>
        <Route exact path="/">
          <>
            <p className={style.title}>Movieroulette</p>
            <Search searchTags={searchTags} />
            <MoviesFilter filterTags={filterTags} />
          </>
        </Route>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>
      </Switch>
    </header>
  );
};
