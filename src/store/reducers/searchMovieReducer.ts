import { Movie } from 'Components/Main/MoviesList';
import { Actions, SearchMoviesActionTypes } from '../types';

interface InitialState {
  movies: Movie[];
  isLoading: boolean;
  error: unknown | null;
}

const initialState: InitialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const searchMovieReducer = (
  state = initialState,
  action: SearchMoviesActionTypes,
): InitialState => {
  switch (action.type) {
    case Actions.GET_MOVIES_STARTED:
      return {
        ...state,
        isLoading: action.payload,
        error: null,
      };
    case Actions.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        isLoading: action.payload.isLoading,
      };
    case Actions.GET_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default searchMovieReducer;
