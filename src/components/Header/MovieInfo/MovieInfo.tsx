import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { Loader } from 'Components/common/Loader';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { api } from 'API/api';
import { Movie } from 'Components/Main/MoviesList';
import { onErrorHandler } from 'Helpers/onErrorCover';

import style from './MovieInfo.module.scss';

export const MovieInfo: React.FC = () => {
  const { id }: { id: string } = useParams();
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    budget: 0,
    revenue: 0,
    runtime: 0,
    genres: [],
  });
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const newMovie = await api.getMovie(id);
      setMovie(newMovie.data);

      dispatch(fetchMovies('release_date', 'genres', newMovie.data.genres[0]));
    };

    getMovie();
  }, [id]);

  const returnToSearch = () => {
    history.push('/');
  };

  return (
    <>
      {!movie.id ? (
        <Loader />
      ) : (
        <>
          <div className={style.card}>
            <div className={style.header}>
              <span className={style.siteName}>Movieroulette</span>
              <Button className={style.search} onClick={returnToSearch}>
                search
              </Button>
            </div>
            <div className={style.body}>
              <div className={style.cover}>
                <img
                  className={style.coverImg}
                  src={movie.poster_path}
                  alt={movie.title}
                  onError={onErrorHandler}
                />
              </div>
              <div className={style.info}>
                <div className={style.titleInfo}>
                  <h1 className={style.title}>{movie.title}</h1>
                  <span className={`${style.vote} ${setRateColorStyle(movie.vote_average)}`}>
                    {movie.vote_average}
                  </span>
                </div>
                <span className={style.tagline}>{movie.tagline}</span>
                <div className={style.additionInfo}>
                  <span className={style.year}>{shortYear(movie.release_date)}</span>
                  <span className={style.runtime}>{movie.runtime} min</span>
                </div>
                <p className={style.description}>{movie.overview}</p>
              </div>
            </div>
            <div className={style.genre}>
              <b>Films by</b> {movie.genres[0]} genre
            </div>
          </div>
        </>
      )}
    </>
  );
};
