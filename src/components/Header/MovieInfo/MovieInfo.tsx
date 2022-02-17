import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { Loader } from 'Components/common/Loader';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { Movie } from 'Components/Main/MoviesList';
import { onErrorHandler } from 'Helpers/onErrorCover';
import {
  StyledContent,
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
  StyledGenreContent,
  StyledMovieGenre,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }: { movie: Movie }) => {
  const { push } = useRouter();
  const id = movie.id || '';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies('release_date', 'genres', movie?.genres?.[0]));
  }, [id]);

  const returnToSearch = () => {
    push('/');
  };

  return (
    <>
      {!movie.id ? (
        <Loader />
      ) : (
        <>
          <StyledContent>
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
          </StyledContent>
          <StyledGenreContent>
            <StyledMovieGenre>
              <b>Films by</b> {movie.genres[0]} genre
            </StyledMovieGenre>
          </StyledGenreContent>
        </>
      )}
    </>
  );
};
