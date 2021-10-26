import { Dispatch } from 'redux';
import { RootState } from 'Store/reducers';
import { api } from '../../api/api';

import { Actions, GetMoviesStarted, GetMoviesFailure, GetMoviesSuccess } from '../types';

export const fetchMovies = (sortBy: string, searchBy: string, search: string) => {
  return async (dispatch: Dispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch<GetMoviesStarted>({
        type: Actions.GET_MOVIES_STARTED,
        payload: true,
      });

      const { sortOrder: sortOrder } = getState().searchMovieReducer;

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
