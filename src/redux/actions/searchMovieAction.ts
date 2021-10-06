import axios from 'axios';
import { Dispatch } from 'redux';
import { Movie } from 'Components/Main/MoviesList';
import {
  SET_MOVIES,
  SEARCH_MOVIE_VALUE,
  SET_SEARCH_CATEGORY,
  SET_FILTER_CATEGORY,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  LOAD_ERROR,
} from '../types';

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

interface LoaderOn {
  type: typeof LOADER_DISPLAY_ON;
}

interface LoaderOff {
  type: typeof LOADER_DISPLAY_OFF;
}

interface LoadError {
  type: typeof LOAD_ERROR;
  payload: string;
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

export const loaderOn = (): LoaderOn => ({
  type: LOADER_DISPLAY_ON,
});

export const loaderOff = (): LoaderOff => ({
  type: LOADER_DISPLAY_OFF,
});

export const loadError = (error: string): LoadError => ({
  type: LOAD_ERROR,
  payload: error,
});

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export const searchMovie = (
  sortCategory = 'release_date',
  searchValue: string,
  searchCategory: string,
) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch<LoaderOn>(loaderOn());
      const response = await axios.get(
        `${url}?sortBy=${sortCategory}&sortOrder=desc&search=${searchValue}&searchBy=${searchCategory}`,
      );

      dispatch<SetMovies>({
        type: SET_MOVIES,
        payload: response.data.data,
      });
      dispatch<LoaderOff>(loaderOff());
    } catch (error) {
      dispatch<LoadError>({
        type: LOAD_ERROR,
        payload: 'Server error',
      });
    }
  };
};

export const setMovies = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch<LoaderOn>(loaderOn());
      const response = await axios.get(`${url}?sortBy=release_date&sortOrder=desc`);

      dispatch<SetMovies>({
        type: SET_MOVIES,
        payload: response.data.data,
      });
      dispatch<LoaderOff>(loaderOff());
    } catch (error) {
      dispatch<LoaderOff>(loaderOff());
      dispatch<LoadError>({
        type: LOAD_ERROR,
        payload: 'Server error',
      });
    }
  };
};

export type SearchMoviesActionTypes =
  | SearchMovieValue
  | SetSearchCategory
  | SetFilterCategory
  | SetMovies
  | LoaderOn
  | LoaderOff
  | LoadError;
