import { combineReducers } from 'redux';
import movies from './moviesReducer';
import sortBy from './sortMoviesReducer';

const rootReducer = combineReducers({
  movies,
  sortBy,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
