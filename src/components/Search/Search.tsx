import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from 'Components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { RootState } from 'Store/reducers';
import { fetchMovies, setCategory, setInputValue } from 'Store/actions/searchMovieAction';
import { useQuery } from 'Helpers/useQuery';

import style from './Search.module.scss';

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const query = useQuery();
  const searchParam = query.get('search');
  const categoryParam = query.get('searchBy') || 'title';
  const filterParam = query.get('sortBy') || 'release_date';

  const dispatch = useDispatch();
  const { category, filter } = useSelector((state: RootState) => state.searchMovieReducer);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchParam) {
      setSearchValue(searchParam);
      dispatch(setInputValue(searchParam));
      dispatch(fetchMovies(filterParam, categoryParam, searchParam));
    }
  }, [searchParam, categoryParam, filterParam]);

  const handleCategoryClick = (activeCategory: string) => () => {
    dispatch(setCategory(activeCategory));
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setInputValue(searchValue));
    if (searchValue) {
      push({
        pathname,
        search: `?sortBy=${filter}&searchBy=${category}&search=${searchValue}&sortOrder=desc`,
      });
    }
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <p className={style.title}>find your movie</p>
      <form className={style.form} onSubmit={handleFormSubmit}>
        <input
          className={style.field}
          type="text"
          placeholder="search movie"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <div className={style.buttons}>
          <span className={style.text}>search by</span>
          <ul className={style.list}>
            {searchTags.map((tag: SearchTag, index: number) => (
              <li key={`${tag.label}_${index}`} className={style.item}>
                <Button
                  onClick={handleCategoryClick?.(tag.type)}
                  className={style.tag}
                  dataTestId="search-tag-btn"
                  activeClassName={tag.type === category ? style.active : ''}
                >
                  {tag.label}
                </Button>
              </li>
            ))}
          </ul>
          <Button className={style.search} dataTestId="search-btn" onClick={handleSubmit}>
            search
          </Button>
        </div>
      </form>
    </>
  );
};
