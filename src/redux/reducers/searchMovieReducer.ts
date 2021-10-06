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
import { SearchMoviesActionTypes } from '../actions/searchMovieAction';

interface InitialState {
  movies: Movie[];
  searchCategory: string;
  sortCategory: string;
  searchValue: string;
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  movies: [],
  searchCategory: 'title',
  sortCategory: 'release_date',
  searchValue: '',
  loading: false,
  error: null,
};

const searchMovieReducer = (
  state = initialState,
  action: SearchMoviesActionTypes,
): InitialState => {
  switch (action.type) {
    case SEARCH_MOVIE_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case SET_SEARCH_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };

    case SET_FILTER_CATEGORY:
      return {
        ...state,
        sortCategory: action.payload,
      };

    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        error: null,
      };
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };

    case LOAD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default searchMovieReducer;
