import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { setFilter, fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { Movie } from '../../../App';
import { FilterTag } from '../Main';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: Array<FilterTag>;
  handleFilterClick?(data?: string): () => void;
  activeFilter: string;
  movies: Movie[];
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({
  filterTags,
  handleFilterClick,
  activeFilter,
  movies,
}) => {
  const { filter } = useSelector((state: RootState) => state.searchMovieReducer);

  const dispatch = useDispatch();

  const moviesSortBy = (filter: string) => () => {
    dispatch(setFilter(filter));
    dispatch(fetchMovies());
  };

  return (
    <div className={style.filter}>
      <p className={style.result}>{movies.length} movies found</p>
      <div className={style.buttons}>
        <p className={style.text}>Sort by</p>
        <ul className={style.list}>
          {filterTags.map((tag: FilterTag) => (
            <li key={tag.label} className={style.item}>
              <Button
                onClick={moviesSortBy?.(tag.type)}
                className={style.tag}
                variant="secondary"
                dataTestId="filter-tag-btn"
                activeClassName={tag.type === filter ? style.active : ''}
              >
                {tag.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
