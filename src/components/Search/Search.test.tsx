import React from 'react';
import { render } from 'enzyme';
import { Search } from './Search';

describe('Search component', () => {
  const tagsList = [
    { label: 'one', type: 'one' },
    { label: 'two', type: 'two' },
  ];

  const handleChange = () => {};

  const handleCategoryClick = () => () => {};

  const handleSubmit = () => {};

  const component = render(
    <Search
      searchTags={tagsList}
      handleChange={handleChange}
      handleCategoryClick={handleCategoryClick}
      activeCategory="test_active"
      handleSubmit={handleSubmit}
    />,
  );

  it('should render Search component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain search button', () => {
    expect(component.find('[data-test-id="search-btn"]')).toHaveLength(1);
  });

  it('should render search tag buttons on given array', () => {
    expect(component.find('[data-test-id="search-tag-btn"]').length).toEqual(tagsList.length);
  });
});
