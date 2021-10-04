import axios from 'axios';
import { Dispatch } from 'redux';
import { Movie } from 'Components/Main/MoviesList';
import { SET_MOVIES, SEARCH_MOVIE_VALUE, SET_SEARCH_CATEGORY, SET_FILTER_CATEGORY } from '../types';

interface SearchMovieValue {
  type: typeof SEARCH_MOVIE_VALUE;
  payload: string;
}

interface SetSearchCategory {
  type: typeof SET_SEARCH_CATEGORY;
  payload: string;
}

interface SetFilterCategory {
  type: typeof SET_FILTER_CATEGORY;
  payload: string;
}

interface SetMovies {
  type: typeof SET_MOVIES;
  payload: Movie[];
}

export const searchMovieValue = (searchValue: string): SearchMovieValue => ({
  type: SEARCH_MOVIE_VALUE,
  payload: searchValue,
});

export const setSearchCategory = (searchCategory: string): SetSearchCategory => ({
  type: SET_SEARCH_CATEGORY,
  payload: searchCategory,
});

export const setFilterCategory = (category: string): SetFilterCategory => ({
  type: SET_FILTER_CATEGORY,
  payload: category,
});

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export const searchMovie = (searchValue: string, searchCategory: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(
      `${url}?sortBy=release_date&sortOrder=desc&search=${searchValue}&searchBy=${searchCategory}`,
    );

    dispatch<SetMovies>({
      type: SET_MOVIES,
      payload: response.data.data,
    });
  };
};

export const setSortMovies = (category: string, searchValue: string, searchCategory: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(
      `${url}?sortBy=${category}&sortOrder=desc&search=${searchValue}&searchBy=${searchCategory}`,
    );

    dispatch<SetMovies>({
      type: SET_MOVIES,
      payload: response.data.data,
    });
  };
};

export const setMovies = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(`${url}?sortBy=release_date&sortOrder=desc`);

    dispatch<SetMovies>({
      type: SET_MOVIES,
      payload: response.data.data,
    });
  };
};

export type SearchMoviesActionTypes =
  | SearchMovieValue
  | SetSearchCategory
  | SetFilterCategory
  | SetMovies;
