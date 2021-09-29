import { combineReducers } from 'redux';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
