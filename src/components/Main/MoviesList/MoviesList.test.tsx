import React from 'react';
import { render } from 'enzyme';
import { MoviesList } from './MoviesList';

describe('MoviesList component', () => {
  it('should render MoviesList component', () => {
    const MoviesTest = [
      {
        id: 1,
        title: 'Test title',
        tagline: 'test tag',
        vote_average: 2,
        vote_count: 3,
        release_date: '2000-20-10',
        poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
        overview: 'test',
        budget: 233435,
        revenue: 0,
        runtime: 0,
        genres: ['test', 'test'],
      },
    ];

    const component = render(<MoviesList movieList={MoviesTest} />);
    expect(component).toMatchSnapshot();
  });
});
