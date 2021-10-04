import React from 'react';
import { Button } from 'Components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { RootState } from '../../redux/reducers';
import {
  setSearchCategory,
  searchMovieValue,
  searchMovie,
} from '../../redux/actions/searchMovieAction';

import style from './Search.module.scss';

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  const searchValue = useSelector((state: RootState) => state.searchMovieReducer.searchValue);

  const searchCategory: string = useSelector(
    (state: RootState) => state.searchMovieReducer.searchCategory,
  );
  const dispatch = useDispatch();

  const moviesSearchCategory = (category: string): void => {
    dispatch(setSearchCategory(category));
  };

  const setSearchValue = (event: InputEvent): void => {
    dispatch(searchMovieValue(event.target.value));
  };

  const handleSearch = () => {
    dispatch(searchMovie(searchValue, searchCategory));
  };

  return (
    <>
      <p className={style.title}>find your movie</p>
      <form className={style.form} onSubmit={handleSearch}>
        <input
          className={style.field}
          type="text"
          placeholder="search movie"
          onChange={setSearchValue}
        />
        <div className={style.buttons}>
          <span className={style.text}>search by</span>
          <ul className={style.list}>
            {searchTags.map((tag: SearchTag, index: number) => (
              <li key={`${tag.text}_${index}`} className={style.item}>
                <Button
                  callback={moviesSearchCategory}
                  className={style.tag}
                  dataTestId="search-tag-btn"
                  typeCategory={tag.type}
                  activeClassName={tag.type === searchCategory ? style.active : ''}
                >
                  {tag.text}
                </Button>
              </li>
            ))}
          </ul>
          <Button className={style.search} dataTestId="search-btn" callback={handleSearch}>
            {'search'}
          </Button>
        </div>
      </form>
    </>
  );
};
