import React from 'react';
import { render } from 'enzyme';
import { Main } from './Main';

describe('Main component', () => {
  it('should render Main component', () => {
    const handleFilterClick = () => () => {};
    const activeFilter = 'test_filter';
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

    const component = render(
      <Main
        handleFilterClick={handleFilterClick}
        activeFilter={activeFilter}
        movies={MoviesTest}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
