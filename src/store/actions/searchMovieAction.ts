import { Dispatch } from 'redux';
import { api } from '../../api/api';

import {
  Actions,
  GetMoviesStarted,
  GetMoviesFailure,
  GetMoviesSuccess,
  SetCategory,
  SetFilter,
} from '../types';

export const setCategory = (category: string): SetCategory => ({
  type: Actions.SET_CATEGORY,
  payload: category,
});

export const setFilter = (filter: string): SetFilter => ({
  type: Actions.SET_FILTER,
  payload: filter,
});

export const fetchMovies = (sortBy: string, searchBy: string, search = '') => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch<GetMoviesStarted>({
        type: Actions.GET_MOVIES_STARTED,
        payload: true,
      });

      const sortOrder = 'desc';

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
