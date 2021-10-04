import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { RootState } from '../../../redux/reducers';
import { Movie } from '../MoviesList';
import { setFilterCategory, setSortMovies } from '../../../redux/actions/searchMovieAction';
import { FilterTag } from '../Main';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: Array<FilterTag>;
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const movieList: Movie[] = useSelector((state: RootState) => state.searchMovieReducer.movies);
  const searchValue = useSelector((state: RootState) => state.searchMovieReducer.searchValue);
  const searchCategory = useSelector((state: RootState) => state.searchMovieReducer.searchCategory);
  const sortCategory: string = useSelector(
    (state: RootState) => state.searchMovieReducer.sortCategory,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSortMovies(sortCategory, searchValue, searchCategory));
  }, [sortCategory]);

  const moviesSortBy = (category: string): void => {
    dispatch(setFilterCategory(category));
  };

  return (
    <div className={style.filter}>
      <div>
        <p className={style.result}>{movieList.length} movies found</p>
      </div>
      <div className={style.buttons}>
        <p className={style.text}>Sort by</p>
        <ul className={style.list}>
          {filterTags.map((tag: FilterTag) => (
            <li key={tag.text} className={style.item}>
              <Button
                callback={moviesSortBy}
                className={style.tag}
                variant="secondary"
                dataTestId="filter-tag-btn"
                typeCategory={tag.type}
                activeClassName={tag.type === sortCategory ? style.active : ''}
              >
                {tag.text}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
