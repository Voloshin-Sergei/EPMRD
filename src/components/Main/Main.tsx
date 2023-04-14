import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { Loader } from 'Components/common/Loader';
import { MoviesList } from './MoviesList';
import { StyledMain, StyledError, StyledTitle } from './Main.styled';

interface Torrent {
  url: string;
  hash: string;
  quality: string;
  type: string;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export interface Movie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: Torrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export const Main: React.FC = () => {
  const { isLoading, error, filter, category, inputValue } = useSelector(
    (state: RootState) => state.searchMovieReducer,
  );

  const { movies } = useSelector((state: RootState) => state.searchMovieReducer.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(filter, category, inputValue));
  }, [fetchMovies, filter, category, inputValue]);

  const renderMovieList = () => {
    if (error && error instanceof Error) {
      return <StyledError>{error.message}</StyledError>;
    }
    if (isLoading) {
      return <Loader />;
    }

    if (!movies.length) {
      return <StyledTitle>No films found</StyledTitle>;
    }
    return <MoviesList movieList={movies} />;
  };

  return <StyledMain>{renderMovieList()}</StyledMain>;
};
