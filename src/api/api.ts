import { Movie } from 'Components/Main/MoviesList';
import { AxiosResponse } from 'axios';
import { request } from '../config/axios.config';

export const api = {
  getMovies: async (params: MovieParams): Promise<AxiosResponse<Movie[]>> => {
    const response = await request.get('/movies', { params });
    return response.data;
  },
};

export interface MovieParams {
  sortBy: string;
  searchBy: string;
  search: string;
  sortOrder: string;
}
