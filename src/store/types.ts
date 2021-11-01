import { Movie } from 'Components/Main/MoviesList';

export enum Actions {
  GET_MOVIES_STARTED = 'GET_MOVIES_STARTED',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_FILTER = 'SET_FILTER',
}

export interface GetMoviesStarted {
  type: typeof Actions.GET_MOVIES_STARTED;
  payload: boolean;
}

export interface GetMoviesSuccess {
  type: typeof Actions.GET_MOVIES_SUCCESS;
  payload: { movies: Movie[]; isLoading: boolean };
}

export interface GetMoviesFailure {
  type: typeof Actions.GET_MOVIES_FAILURE;
  payload: { error: unknown; isLoading: boolean };
}

export interface SetCategory {
  type: typeof Actions.SET_CATEGORY;
  payload: string;
}

export interface SetFilter {
  type: typeof Actions.SET_FILTER;
  payload: string;
}

export type SearchMoviesActionTypes =
  | GetMoviesStarted
  | GetMoviesSuccess
  | GetMoviesFailure
  | SetCategory
  | SetFilter;
