import React from 'react';
import { Button } from 'Components/Button';

import style from './Search.module.scss';

const searchTags = ['title', 'genre'];

export const Search = () => (
  <>
    <p className={style.title}>find your movie</p>
    <form className={style.form}>
      <input className={style.field} type="text" placeholder="search move" />
      <div className={style.buttons}>
        <span className={style.text}>search by</span>
        <ul className={style.list}>
          {searchTags.map((tag, index) => (
            <li key={`${index}_${tag}`} className={style.item}>
              <Button className={style.tag} filled text={tag} />
            </li>
          ))}
        </ul>
        <Button className={style.search} text="search" filled />
      </div>
    </form>
  </>
);
