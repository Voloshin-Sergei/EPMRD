import React from 'react';
import { render } from 'enzyme';
import { MoviesFilter } from './MoviesFilter';

describe('MoviesFilter component', () => {
  const tagsList = [
    { label: 'one', type: 'one' },
    { label: 'two', type: 'two' },
  ];

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
    <MoviesFilter
      filterTags={tagsList}
      handleFilterClick={handleFilterClick}
      activeFilter={activeFilter}
      movies={MoviesTest}
    />,
  );

  it('should render MoviesFilter component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render filter tag buttons on given array', () => {
    expect(component.find('[data-test-id="filter-tag-btn"]').length).toEqual(tagsList.length);
  });
});
