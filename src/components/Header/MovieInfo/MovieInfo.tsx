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
  Header,
  SiteName,
  Body,
  Cover,
  CoverImg,
  TitleInfo,
  Title,
  Vote,
  Tagline,
  AdditionInfo,
  Year,
  Runtime,
  Description,
  Genre,
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
          <Header>
            <SiteName>Movieroulette</SiteName>
            <Button onClick={returnToSearch} typeBtn="movieInfoBtn">
              search
            </Button>
          </Header>
          <Body>
            <Cover>
              <CoverImg src={movie.poster_path} alt={movie.title} onError={onErrorHandler} />
            </Cover>
            <div>
              <TitleInfo>
                <Title>{movie.title}</Title>
                <Vote rate={setRateColorStyle(movie.vote_average)}>{movie.vote_average}</Vote>
              </TitleInfo>
              <Tagline>{movie.tagline}</Tagline>
              <AdditionInfo>
                <Year>{shortYear(movie.release_date)}</Year>
                <Runtime>{movie.runtime} min</Runtime>
              </AdditionInfo>
              <Description>{movie.overview}</Description>
            </div>
          </Body>
          <Genre>
            <b>Films by</b> {movie.genres[0]} genre
          </Genre>
        </>
      )}
    </>
  );
};
