import axios from 'axios';
import { Dispatch } from 'redux';
import { api } from '../../api/api';

import {
  Actions,
  SearchMovieValue,
  SetSearchCategory,
  SetFilterCategory,
  GetMoviesStarted,
  GetMoviesFailure,
  GetMoviesSuccess,
} from '../types';

export const searchMovieValue = (searchValue: string): SearchMovieValue => ({
  type: Actions.SEARCH_MOVIE_VALUE,
  payload: searchValue,
});

export const setSearchCategory = (searchCategory: string): SetSearchCategory => ({
  type: Actions.SET_SEARCH_CATEGORY,
  payload: searchCategory,
});

export const setFilterCategory = (category: string): SetFilterCategory => ({
  type: Actions.SET_FILTER_CATEGORY,
  payload: category,
});

export const getMoviesStarted = (): GetMoviesStarted => ({
  type: Actions.GET_MOVIES_STARTED,
});

export const getMoviesFailure = (error: unknown): GetMoviesFailure => ({
  type: Actions.GET_MOVIES_FAILURE,
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
      dispatch<GetMoviesStarted>(getMoviesStarted());
      const response = await axios.get(
        `${url}?sortBy=${sortCategory}&sortOrder=desc&search=${searchValue}&searchBy=${searchCategory}`,
      );

      dispatch<GetMoviesSuccess>({
        type: Actions.GET_MOVIES_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch<GetMoviesFailure>({
        type: Actions.GET_MOVIES_FAILURE,
        payload: error,
      });
    }
  };
};

export const setMovies = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch<GetMoviesStarted>(getMoviesStarted());
      const response = await axios.get(`${url}?sortBy=release_date&sortOrder=desc`);
      dispatch<GetMoviesSuccess>({
        type: Actions.GET_MOVIES_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch<GetMoviesFailure>({
        type: Actions.GET_MOVIES_FAILURE,
        payload: error,
      });
    }
  };
};
