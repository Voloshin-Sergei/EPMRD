import { Movie } from 'Components/Main/MoviesList';

export enum Actions {
  GET_MOVIES_STARTED = 'GET_MOVIES_STARTED',
  GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS',
  GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_FILTER = 'SET_FILTER',
  SET_INPUT_VALUE = 'SET_INPUT_VALUE',
}

export interface GetMoviesStarted {
  type: Actions.GET_MOVIES_STARTED;
  payload: boolean;
}

export interface GetMoviesSuccess {
  type: Actions.GET_MOVIES_SUCCESS;
  payload: { movies: Movie[]; isLoading: boolean };
}

export interface GetMoviesFailure {
  type: Actions.GET_MOVIES_FAILURE;
  payload: { error: unknown; isLoading: boolean };
}

export interface SetCategory {
  type: Actions.SET_CATEGORY;
  payload: string;
}

export interface SetFilter {
  type: Actions.SET_FILTER;
  payload: string;
}

export interface SetInputValue {
  type: Actions.SET_INPUT_VALUE;
  payload: string;
}

export type SearchMoviesActionTypes =
  | GetMoviesStarted
  | GetMoviesSuccess
  | GetMoviesFailure
  | SetCategory
  | SetFilter
  | SetInputValue;
