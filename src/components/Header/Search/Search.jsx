import React from 'react';
import style from './Search.module.scss';

const Search = () => (
  <>
    <p className={style.title}>find your movie</p>
    <form className={style.form}>
      <input className={style.field} type="text" placeholder="search move" />
      <div className={style.buttons}>
        <span className={style.text}>search by</span>
        <ul className={style.list}>
          <li className={style.item}>
            <button className={`${style.button} ${style.tag}`} type="button">
              title
            </button>
          </li>
          <li className={style.item}>
            <button className={`${style.button} ${style.tag}`} type="button">
              genre
            </button>
          </li>
        </ul>
        <button className={`${style.button} ${style.search}`} type="submit">
          search
        </button>
      </div>
    </form>
  </>
);

export default Search;
