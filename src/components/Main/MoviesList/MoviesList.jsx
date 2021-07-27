import React from 'react';
import { MovieCard } from './MovieCard';
import style from './MoviesList.module.scss';

const movies = [
  {
    genres: ['Action', 'Adventure', 'Thriller', 'Science Fiction'],
    id: 497698,
    cover: 'https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
    year: '2021',
    title: 'Black Widow',
  },
  {
    genres: ['Animation', 'Comedy', 'Adventure', 'Family'],
    id: 459151,
    cover: 'https://image.tmdb.org/t/p/w500/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg',
    year: '2021',
    title: 'The Boss Baby: Family Business',
  },
  {
    genres: ['Action', 'Science Fiction'],
    id: 588228,
    cover: 'https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
    year: '2021',
    title: 'The Tomorrow War',
  },
  {
    genres: ['Animation', 'Comedy', 'Family', 'Science Fiction'],
    id: 379686,
    cover: 'https://image.tmdb.org/t/p/w500/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
    year: '2021',
    title: 'Space Jam: A New Legacy',
  },
  {
    genres: ['Animation', 'Comedy', 'Family', 'Fantasy'],
    id: 508943,
    cover: 'https://image.tmdb.org/t/p/w500/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
    year: '2021',
    title: 'Luca',
  },
  {
    genres: ['Action', 'Adventure', 'Crime', 'Thriller'],
    id: 385128,
    cover: 'https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
    year: '2021',
    title: 'F9',
  },
  {
    genres: ['Adventure', 'Thriller', 'Action', 'Horror', 'Western'],
    id: 602223,
    cover: 'https://image.tmdb.org/t/p/w500/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg',
    year: '2021',
    title: 'The Forever Purge',
  },
];

export const MoviesList = () => (
  <section className={style.movies}>
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        year={movie.year}
        title={movie.title}
        poster={movie.cover}
        genres={movie.genres}
      />
    ))}
  </section>
);
