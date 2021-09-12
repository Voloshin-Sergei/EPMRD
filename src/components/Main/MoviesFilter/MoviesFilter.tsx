import React from 'react';
import { Button } from 'Components/common/Button';

import style from './MoviesFilter.module.scss';

export interface MoviesFilterProps {
  filterTags: string[];
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => (
  <div className={style.filter}>
    <div>
      <p className={style.result}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul className={style.list}>
        {filterTags.map((tag: string) => (
          <li key={tag} className={style.item}>
            <Button className={style.tag} variant="secondary" dataTestId="filter-tag-btn">
              {tag}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
