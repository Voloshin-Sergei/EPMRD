import { Movie } from 'Components/Main/MoviesList';
import { Actions, SearchMoviesActionTypes } from '../types';

interface InitialState {
  movies: Movie[];
  searchCategory: string;
  sortCategory: string;
  searchValue: string;
  sortOrder: string;
  loading: boolean;
  error: unknown | null;
}

const initialState: InitialState = {
  movies: [],
  searchCategory: 'title',
  sortCategory: 'release_date',
  searchValue: '',
  sortOrder: 'desc',
  loading: false,
  error: null,
};

const searchMovieReducer = (
  state = initialState,
  action: SearchMoviesActionTypes,
): InitialState => {
  switch (action.type) {
    case Actions.SEARCH_MOVIE_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case Actions.SET_SEARCH_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };

    case Actions.SET_FILTER_CATEGORY:
      return {
        ...state,
        sortCategory: action.payload,
      };

    case Actions.GET_MOVIES_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Actions.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case Actions.GET_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchMovieReducer;
