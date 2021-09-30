import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { RootState } from '../../../redux/reducers';
import { Movie } from '../MoviesList';
import { sortMovies, setSortMovies } from '../../../redux/actions/sortMoviesAction';
import { FilterTag } from '../Main';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: Array<FilterTag>;
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const movieList: Movie[] = useSelector((state: RootState) => state.movies.items);
  const sortCategory: string = useSelector((state: RootState) => state.sortBy.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSortMovies(sortCategory));
  }, [sortCategory]);

  const moviesSortBy = (category: string): void => {
    dispatch(sortMovies(category));
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
                activeCategory={sortCategory}
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
