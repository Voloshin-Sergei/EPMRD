import React from 'react';
import { Button } from 'Components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { RootState } from 'Store/reducers';
import { setSearchCategory, searchMovieValue, searchMovie } from 'Store/actions/searchMovieAction';

import style from './Search.module.scss';

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  const { sortCategory, searchValue, searchCategory } = useSelector(
    (state: RootState) => state.searchMovieReducer,
  );

  const dispatch = useDispatch();

  const moviesSearchCategory = (category: string): void => {
    dispatch(setSearchCategory(category));
  };

  const setSearchValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(searchMovieValue(event.target.value));
  };

  const handleSearch = () => {
    dispatch(searchMovie(sortCategory, searchValue, searchCategory));
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <>
      <p className={style.title}>find your movie</p>
      <form className={style.form} onSubmit={handleFormSubmit}>
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
              <li key={`${tag.label}_${index}`} className={style.item}>
                <Button
                  callback={moviesSearchCategory}
                  className={style.tag}
                  dataTestId="search-tag-btn"
                  typeCategory={tag.type}
                  activeClassName={tag.type === searchCategory ? style.active : ''}
                >
                  {tag.label}
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
