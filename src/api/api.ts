import { Movie } from 'Components/Main/MoviesList';
import { AxiosResponse } from 'axios';
import { request } from '../config/axios.config';

const movieLimit = 9;

export const api = {
  getMovies: async (params: MovieParams): Promise<AxiosResponse<Movie[]>> => {
    const response = await request.get('/list_movies.json', {
      params: {
        limit: movieLimit,
        sortBy: params.sortBy,
        searchBy: params.searchBy,
        query_term: params.search,
        sortOrder: 'desc',
      },
    });
    return response.data;
  },

  getMovie: async (id: string): Promise<AxiosResponse<Movie>> => {
    const response = await request.get(`/movies/${id}`);
    return response;
  },
};

export interface MovieParams {
  limit: number;
  sortBy: string;
  searchBy: string;
  query_term: string;
  search: string;
}
