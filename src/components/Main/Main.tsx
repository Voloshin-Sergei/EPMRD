import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'Store/reducers';
import { Loader } from 'Components/common/Loader';
import { Movie } from '../../App';
import { MoviesFilter } from './MoviesFilter';
import { MoviesList } from './MoviesList';

import style from './Main.module.scss';

export interface FilterTag {
  label: string;
  type: string;
}

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];

export interface MainProps {
  handleFilterClick?(data?: string): () => void;
  activeFilter: string;
  movies: Movie[];
}

export const Main: React.FC<MainProps> = ({ handleFilterClick, activeFilter, movies }) => {
  const { isLoading, error } = useSelector((state: RootState) => state.searchMovieReducer);
  const renderMovieList = () => {
    if (error && error instanceof Error) {
      return <h2 className={style.error}>{error.message}</h2>;
    }
    if (isLoading) {
      return <Loader />;
    }
    return <MoviesList movieList={movies} />;
  };

  return (
    <main className={style.main}>
      <MoviesFilter
        filterTags={filterTags}
        handleFilterClick={handleFilterClick}
        activeFilter={activeFilter}
        movies={movies}
      />
      {renderMovieList()}
    </main>
  );
};
