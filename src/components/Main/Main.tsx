import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { Loader } from 'Components/common/Loader';
import { MoviesList } from './MoviesList';
import { MainStyled, ErrorStyled, Title } from './Main.styled';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: string[];
}

export const Main: React.FC = () => {
  const { isLoading, error, movies, filter, category, inputValue } = useSelector(
    (state: RootState) => state.searchMovieReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(filter, category, inputValue));
  }, [fetchMovies, filter, category, inputValue]);

  const renderMovieList = () => {
    if (error && error instanceof Error) {
      return <ErrorStyled>{error.message}</ErrorStyled>;
    }
    if (isLoading) {
      return <Loader />;
    }

    if (!movies.length) {
      return <Title>No films found</Title>;
    }
    return <MoviesList movieList={movies} />;
  };

  return <MainStyled>{renderMovieList()}</MainStyled>;
};
