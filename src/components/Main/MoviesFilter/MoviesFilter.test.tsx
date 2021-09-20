import React from 'react';
import { render } from 'enzyme';
import { MoviesFilter } from './MoviesFilter';

describe('MoviesFilter component', () => {
  const tagsList = ['one', 'two'];
  const component = render(<MoviesFilter filterTags={tagsList} />);

  it('should render MoviesFilter component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render filter tag buttons on given array', () => {
    expect(component.find('[data-test-id="filter-tag-btn"]').length).toEqual(tagsList.length);
  });
});
