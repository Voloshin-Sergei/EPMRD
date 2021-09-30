import { SortMoviesAction, SORT_MOVIES } from '../actions/sortMoviesAction';

interface InitialState {
  category: string;
}

const initialState: InitialState = {
  category: 'release_date',
};

const sortBy = (state = initialState, action: SortMoviesAction): InitialState => {
  switch (action.type) {
    case SORT_MOVIES:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default sortBy;
