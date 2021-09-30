import axios from 'axios';
import { Dispatch } from 'redux';
import { Movie } from 'Components/Main/MoviesList';

export const SET_MOVIES = 'SET_MOVIES';

export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  payload: Movie[];
}

const url = 'https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc';

export const setMovies = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(url);

    dispatch<SetMoviesAction>({
      type: SET_MOVIES,
      payload: response.data.data,
    });
  };
};
