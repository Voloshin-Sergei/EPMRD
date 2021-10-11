import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { setFilterCategory, searchMovie } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { FilterTag } from '../Main';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: Array<FilterTag>;
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const { movies, searchValue, searchCategory, sortCategory } = useSelector(
    (state: RootState) => state.searchMovieReducer,
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(searchMovie(sortCategory, searchValue, searchCategory));
  // }, [sortCategory]);

  const moviesSortBy = (category: string): void => {
    dispatch(setFilterCategory(category));
  };

  return (
    <div className={style.filter}>
      <div>
        <p className={style.result}>{movies.length} movies found</p>
      </div>
      <div className={style.buttons}>
        <p className={style.text}>Sort by</p>
        <ul className={style.list}>
          {filterTags.map((tag: FilterTag) => (
            <li key={tag.label} className={style.item}>
              <Button
                callback={moviesSortBy}
                className={style.tag}
                variant="secondary"
                dataTestId="filter-tag-btn"
                typeCategory={tag.type}
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
