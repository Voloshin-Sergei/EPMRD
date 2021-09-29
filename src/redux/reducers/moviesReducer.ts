import { Movie } from 'Components/Main/MoviesList';
import { SetMoviesAction, SET_MOVIES } from '../actions/setMoviesAction';

interface InitialState {
  items: Movie[];
}

const initialState: InitialState = {
  items: [],
};

const movies = (state = initialState, action: SetMoviesAction): InitialState => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
