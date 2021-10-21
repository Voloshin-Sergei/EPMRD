import { Dispatch } from 'redux';
import { RootState } from 'Store/reducers';
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

export const fetchMovies = () => {
  return async (dispatch: Dispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch<GetMoviesStarted>({
        type: Actions.GET_MOVIES_STARTED,
        payload: true,
      });

      const {
        sortCategory: sortBy,
        searchCategory: searchBy,
        searchValue: search,
        sortOrder,
      } = getState().searchMovieReducer;

      const { data } = await api.getMovies({ sortBy, searchBy, search, sortOrder });
      dispatch<GetMoviesSuccess>({
        type: Actions.GET_MOVIES_SUCCESS,
        payload: { movies: data, isLoading: false },
      });
    } catch (error) {
      dispatch<GetMoviesFailure>({
        type: Actions.GET_MOVIES_FAILURE,
        payload: { error, isLoading: false },
      });
    }
  };
};
