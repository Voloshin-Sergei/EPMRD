const initialState = {
  items: [],
};

const movies = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default movies;
