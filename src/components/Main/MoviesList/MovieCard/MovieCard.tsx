import React from 'react';
import { Link } from 'react-router-dom';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
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
        <img
          className={style.poster}
          src={poster}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
          }}
        />
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
