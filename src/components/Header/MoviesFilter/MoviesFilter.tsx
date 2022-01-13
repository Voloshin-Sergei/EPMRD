import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { setFilter } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { FilterTag } from '../../Header/Header';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: FilterTag[];
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const { filter, movies } = useSelector((state: RootState) => state.searchMovieReducer);

  const dispatch = useDispatch();

  const handleFilterClick = (activeFilter: string) => () => {
    dispatch(setFilter(activeFilter));
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
                onClick={handleFilterClick?.(tag.type)}
                className={style.tag}
                variant="secondary"
                dataTestId="filter-tag-btn"
                // activeClassName={tag.type === filter ? style.active : ''}
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
