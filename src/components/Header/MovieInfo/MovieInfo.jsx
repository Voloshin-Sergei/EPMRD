import React from 'react';
import { Button } from 'Components/common/Button';
import style from './MovieInfo.module.scss';

export const MovieInfo = () => {
  return (
    <>
      <div className={style.card}>
        <div className={style.header}>
          <span className={style.siteName}>Movieroulette</span>
          <Button className={style.search}>search</Button>
        </div>
        <div className={style.body}>
          <div className={style.cover}>
            <img
              className={style.coverImg}
              src="https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg"
              alt=""
            />
          </div>
          <div className={style.info}>
            <div className={style.titleInfo}>
              <h1 className={style.title}>Fifty Shades Freed</h1>
              <span className={style.vote}>6.1</span>
            </div>
            <span className={style.tagline}>Dont miss the climax</span>
            <div className={style.additionInfo}>
              <span className={style.year}>2018</span>
              <span className={style.runtime}>106 min</span>
            </div>
            <p className={style.description}>
              Believing they have left behind shadowy figures from their past, newlyweds Christian
              and Ana fully embrace an inextricable connection and shared life of luxury. But just
              as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability,
              new threats could jeopardize their happy ending before it even begins.
            </p>
          </div>
        </div>
        <div className={style.genre}>
          <b>Films by</b> Drama genre
        </div>
      </div>
    </>
  );
};
