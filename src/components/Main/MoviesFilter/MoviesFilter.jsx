import React from 'react';
import style from './MoviesFilter.module.scss';

export const MoviesFilter = () => (
  <div className={style.sort}>
    <div>
      <p className={style.result}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul className={style.list}>
        <li className={style.item}>
          <button className={style.button} type="button">
            release
          </button>
        </li>
        <li className={style.item}>
          <button className={style.button} type="button">
            date
          </button>
        </li>
        <li className={style.item}>
          <button className={style.button} type="button">
            rating
          </button>
        </li>
      </ul>
    </div>
  </div>
);
