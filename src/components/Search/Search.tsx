import React from 'react';
import { Button } from 'Components/common/Button';

import style from './Search.module.scss';

export interface SearchProps {
  searchTags: string[];
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => (
  <>
    <p className={style.title}>find your movie</p>
    <form className={style.form}>
      <input className={style.field} type="text" placeholder="search movie" />
      <div className={style.buttons}>
        <span className={style.text}>search by</span>
        <ul className={style.list}>
          {searchTags.map((tag: string, index: number) => (
            <li key={`${tag}_${index}`} className={style.item}>
              <Button className={style.tag} dataTestId="search-tag-btn">
                {tag}
              </Button>
            </li>
          ))}
        </ul>
        <Button className={style.search} dataTestId="search-btn">
          {'search'}
        </Button>
      </div>
    </form>
  </>
);
