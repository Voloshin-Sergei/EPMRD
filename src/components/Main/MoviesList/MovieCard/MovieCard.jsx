import React from 'react';
import propTypes from 'prop-types';
import style from './MovieCard.module.scss';

const MovieCard = ({
  year, title, poster, genres,
}) => (
  <div className={style.movie}>
    <img className={style.poster} src={poster} alt={title} />
    <div className={style.info}>
      <h3 className={style.title}>{title}</h3>
      <span className={style.year}>{year}</span>
    </div>
    <ul className={style.genres}>
      {genres.map((genre) => <li key={genre} className={style.genre}>{genre}</li>)}
    </ul>
  </div>
);

MovieCard.propTypes = {
  year: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default MovieCard;
