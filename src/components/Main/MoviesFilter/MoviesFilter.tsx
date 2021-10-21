import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { setFilterCategory, fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { FilterTag } from '../Main';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: Array<FilterTag>;
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const { movies, sortCategory } = useSelector((state: RootState) => state.searchMovieReducer);

  const dispatch = useDispatch();

  const moviesSortBy = (category: string) => () => {
    dispatch(setFilterCategory(category));
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
                onClick={moviesSortBy(tag.type)}
                className={style.tag}
                variant="secondary"
                dataTestId="filter-tag-btn"
                activeClassName={tag.type === sortCategory ? style.active : ''}
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
