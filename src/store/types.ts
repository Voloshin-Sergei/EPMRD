import { Movie } from 'Components/Main/MoviesList';

export enum Actions {
  SEARCH_MOVIE_VALUE = 'SEARCH_MOVIE_VALUE',
  SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY',
  SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY',
  GET_MOVIES_STARTED = 'GET_MOVIES_STARTED',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE',
}

export interface SearchMovieValue {
  type: typeof Actions.SEARCH_MOVIE_VALUE;
  payload: string;
}

export interface SetSearchCategory {
  type: typeof Actions.SET_SEARCH_CATEGORY;
  payload: string;
}

export interface SetFilterCategory {
  type: typeof Actions.SET_FILTER_CATEGORY;
  payload: string;
}
export interface GetMoviesStarted {
  type: typeof Actions.GET_MOVIES_STARTED;
}

export interface GetMoviesSuccess {
  type: typeof Actions.GET_MOVIES_SUCCESS;
  payload: Movie[];
}

export interface GetMoviesFailure {
  type: typeof Actions.GET_MOVIES_FAILURE;
  payload: unknown;
}

export type SearchMoviesActionTypes =
  | SearchMovieValue
  | SetSearchCategory
  | SetFilterCategory
  | GetMoviesStarted
  | GetMoviesSuccess
  | GetMoviesFailure;
