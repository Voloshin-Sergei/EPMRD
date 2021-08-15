import React from 'react';
import { Button } from 'Components/common/Button';

import style from './MoviesFilter.module.scss';

const filterTags: string[] = ['release', 'date', 'rating'];

export const MoviesFilter = () => (
  <div className={style.filter}>
    <div>
      <p className={style.result}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul className={style.list}>
        {filterTags.map((tag: string) => (
          <li key={tag} className={style.item}>
            <Button className={style.tag} type="button" variant="secondary" text={tag} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
