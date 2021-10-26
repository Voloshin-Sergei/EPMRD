import React from 'react';
import { Button } from 'Components/common/Button';
import { useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { fetchMovies } from 'Store/actions/searchMovieAction';

import style from './Search.module.scss';

export interface SearchProps {
  searchTags: Array<SearchTag>;
  onChange: () =>;
  onClick: () =>;
  activeCategory: string;
  handleSubmit: () =>;
}

export const Search: React.FC<SearchProps> = ({
  searchTags,
  onChange,
  onClick,
  activeCategory,
  handleSubmit,
}) => {
  const handleSearchValue = (event): void => {
    onChange(event);
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
          onChange={handleSearchValue}
        />
        <div className={style.buttons}>
          <span className={style.text}>search by</span>
          <ul className={style.list}>
            {searchTags.map((tag: SearchTag, index: number) => (
              <li key={`${tag.label}_${index}`} className={style.item}>
                <Button
                  onClick={onClick(tag.type)}
                  className={style.tag}
                  dataTestId="search-tag-btn"
                  activeClassName={tag.type === activeCategory ? style.active : ''}
                >
                  {tag.label}
                </Button>
              </li>
            ))}
          </ul>
          <Button className={style.search} dataTestId="search-btn" onClick={handleSubmit}>
            {'search'}
          </Button>
        </div>
      </form>
    </>
  );
};
