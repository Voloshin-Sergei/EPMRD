import React from 'react';
import style from './MovieCard.module.scss';

export interface MovieCardProps {
  year: string,
  title: string,
  poster: string,
  genres: string[]
}

export const MovieCard: React.FC<MovieCardProps> = ({
  year, title, poster, genres,
}) => (
  <div className={style.movie}>
    <img className={style.poster} src={poster} alt={title} />
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      <span className={style.year}>{year}</span>
    </div>
    <ul className={style.genres}>
      {genres.map((genre: string) => <li key={genre} className={style.genre}>{genre}</li>)}
    </ul>
  </div>
);
