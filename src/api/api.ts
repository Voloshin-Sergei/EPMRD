import { request } from '../config/axios.config';

export const api = {
  getMovies: async (params: MovieParams): Promise<void> => {
    await request.get('/movies', { params });
  },
};

interface MovieParams {
  sortBy: string;
}
