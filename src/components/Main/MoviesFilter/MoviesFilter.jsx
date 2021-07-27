import React from 'react';
import { Button } from '../../Button';

import style from './MoviesFilter.module.scss';

const filterTags = ['release', 'date', 'rating'];

export const MoviesFilter = () => (
  <div className={style.sort}>
    <div>
      <p className={style.result}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul className={style.list}>
        {filterTags.map((tag, index) => (
          <li key={`${index}_${tag}`} className={style.item}>
            <Button className={style.tag} text={tag} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
