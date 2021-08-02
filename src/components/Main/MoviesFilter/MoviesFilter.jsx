import React from 'react';
import { Button } from 'Components/common/Button';

import style from './MoviesFilter.module.scss';

const filterTags = ['release', 'date', 'rating'];

const MoviesFilter = () => (
  <div className={style.filter}>
    <div>
      <p className={style.result}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul className={style.list}>
        {filterTags.map((tag) => (
          <li key={tag} className={style.item}>
            <Button className={style.tag} type="button" text={tag} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MoviesFilter;
