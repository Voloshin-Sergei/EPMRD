import axios from 'axios';
import { Dispatch } from 'redux';
import { SetMoviesAction, SET_MOVIES } from './setMoviesAction';

export const SORT_MOVIES = 'SORT_MOVIES';

export interface SortMoviesAction {
  type: typeof SORT_MOVIES;
  payload: string;
}

export const sortMovies = (category: string): SortMoviesAction => ({
  type: SORT_MOVIES,
  payload: category,
});

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export const setSortMovies = (category: string | null) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(`${url}?sortBy=${category}&sortOrder=desc`);

    dispatch<SetMoviesAction>({
      type: SET_MOVIES,
      payload: response.data.data,
    });
  };
};
