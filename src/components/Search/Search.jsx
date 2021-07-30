import React from 'react';
import { Button } from 'Components/common/Button';

import style from './Search.module.scss';

const searchTags = ['title', 'genre'];

export const Search = () => (
  <>
    <p className={style.title}>find your movie</p>
    <form className={style.form}>
      <input className={style.field} type="text" placeholder="search movie" />
      <div className={style.buttons}>
        <span className={style.text}>search by</span>
        <ul className={style.list}>
          {searchTags.map((tag, index) => (
            <li key={`${index}_${tag}`} className={style.item}>
              <Button className={style.tag} variant="primary" type="button" text={tag} />
            </li>
          ))}
        </ul>
        <Button className={style.search} text="search" variant="primary" type="button" />
      </div>
    </form>
  </>
);
