import { Movie } from 'Components/Main/MoviesList';
import { AxiosResponse } from 'axios';
import { fetchMovies } from './searchMovieAction';
import { api } from '../../api/api';

describe('fetchMovies', () => {
  jest.mock('../../api/api');
  const apiMock = api as jest.Mocked<typeof api>;

  const result: AxiosResponse<Movie[]> = {
    data: [],
    status: 1,
    statusText: '1',
    headers: '1',
    config: {},
    request: '1',
  };

  apiMock.getMovies.mockReturnValue(Promise.resolve(result));

  const thunk = fetchMovies();
  const dispatchMock = jest.fn();

  it('should be called', async () => {
    await thunk(dispatchMock);
    expect(dispatchMock).toBeCalledTimes(2);
  });
});
