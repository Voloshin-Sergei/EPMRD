import React from 'react';
import style from './MovieCard.module.scss';

const MovieCard = ({ year, title, poster, genres }) => (
  <div className={style.movie}>
    <img src={poster} alt={title} />
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      <span className={style.year}>{year}</span>
    </div>
    <ul className={style.genres}>
      {genres.map((genre, index) => {
        return (
          <li key={index} className={style.genre}>
            {genre}
          </li>
        );
      })}
    </ul>
  </div>
);

export default MovieCard;
