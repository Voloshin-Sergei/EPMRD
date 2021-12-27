import React from 'react';
import { Link } from 'react-router-dom';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
import { onErrorHandler } from 'Helpers/onErrorCover';
import style from './MovieCard.module.scss';

export interface MovieCardProps {
  id: number;
  year: string;
  title: string;
  poster: string;
  genres: string[];
  rating: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  year,
  title,
  poster,
  genres,
  rating,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className={style.movie}>
        <img className={style.poster} src={poster} alt={title} onError={onErrorHandler} />
        <span className={`${style.vote} ${setRateColorStyle(rating)}`}>{rating}</span>
        <div className={style.info}>
          <h3 className={style.title}>{title}</h3>
          <span className={style.year}>{shortYear(year)}</span>
        </div>
        <ul className={style.genres}>
          {genres.map((genre: string, index) => (
            <li key={`${genre}_${index}`} className={style.genre}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
