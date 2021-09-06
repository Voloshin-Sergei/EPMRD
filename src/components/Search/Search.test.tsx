import React from 'react';
import { render } from 'enzyme';
import { Search } from './Search';
import { Button } from 'Components/common/Button';


describe('Search component', () => {
  const tagsList = ['one', 'two', 'three'];

  const component = render(<Search searchTags={tagsList}/>);

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
