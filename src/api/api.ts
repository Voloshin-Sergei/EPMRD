import { Movie } from 'Components/Main/MoviesList';
import { AxiosResponse } from 'axios';
import { request } from '../config/axios.config';

export const api = {
  getMovies: async (params: MovieParams): Promise<AxiosResponse<Movie[]>> => {
    const response = await request.get('/movies', {
      params: {
        sortBy: params.sortBy,
        searchBy: params.searchBy,
        search: params.search,
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
  sortBy: string;
  searchBy: string;
  search: string;
}
