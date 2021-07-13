import React from 'react';
import style from './Sort.module.scss';

const Sort = () => (
  <div className={style.sort}>
    <div>
      <p className={style.text}>7 movies found</p>
    </div>
    <div className={style.buttons}>
      <p className={style.text}>Sort by</p>
      <ul>
        <li>
          {' '}
          <button className={style.button} type="button">
            release
          </button>
        </li>
        <li>
          <button className={style.button} type="button">
            date
          </button>
        </li>
        <li>
          <button className={style.button} type="button">
            rating
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default Sort;
