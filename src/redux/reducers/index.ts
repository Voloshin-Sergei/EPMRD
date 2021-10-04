import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';

const rootReducer = combineReducers({
  searchMovieReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
