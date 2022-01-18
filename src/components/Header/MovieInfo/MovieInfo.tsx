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
import {
  StyledHeader,
  StyledSiteName,
  StyledBody,
  StyledMovieCover,
  StyledMovieCoverImg,
  StyledMovieInfo,
  StyledTitle,
  StyledMovieVote,
  StyledMovieTagline,
  StyledAdditionMovieInfo,
  StyledMovieYear,
  StyledMovieRuntime,
  StyledMovieDescription,
  StyledMovieGenre,
} from './MovieInfo.styled';

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
          <StyledHeader>
            <StyledSiteName>Movieroulette</StyledSiteName>
            <Button onClick={returnToSearch} typeBtn="movieInfoBtn">
              search
            </Button>
          </StyledHeader>
          <StyledBody>
            <StyledMovieCover>
              <StyledMovieCoverImg
                src={movie.poster_path}
                alt={movie.title}
                onError={onErrorHandler}
              />
            </StyledMovieCover>
            <div>
              <StyledMovieInfo>
                <StyledTitle>{movie.title}</StyledTitle>
                <StyledMovieVote rate={setRateColorStyle(movie.vote_average)}>
                  {movie.vote_average}
                </StyledMovieVote>
              </StyledMovieInfo>
              <StyledMovieTagline>{movie.tagline}</StyledMovieTagline>
              <StyledAdditionMovieInfo>
                <StyledMovieYear>{shortYear(movie.release_date)}</StyledMovieYear>
                <StyledMovieRuntime>{movie.runtime} min</StyledMovieRuntime>
              </StyledAdditionMovieInfo>
              <StyledMovieDescription>{movie.overview}</StyledMovieDescription>
            </div>
          </StyledBody>
          <StyledMovieGenre>
            <b>Films by</b> {movie.genres[0]} genre
          </StyledMovieGenre>
        </>
      )}
    </>
  );
};
