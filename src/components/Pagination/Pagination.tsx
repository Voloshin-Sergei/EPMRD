import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Store/reducers';

export const Pagination: React.FC = () => {
  const { movie_count, limit, page_number } = useSelector(
    (state: RootState) => state.searchMovieReducer.movies,
  );

  const lastPage = Math.ceil(movie_count / limit);

  return (
    <div>
      <button>First</button>
      <button>Prev</button>
      {page_number}
      <button>Next</button>
      <button>Last</button>
    </div>
  );
};
