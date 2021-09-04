import React from 'react';
import { render } from 'enzyme';
import { Search } from './Search';
import { Button } from 'Components/common/Button';


describe('Search component', () => {
  const component = render(<Search />);

  it('should render Search component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should contain search button', () => {
    expect(component.find('button').text().includes('search')).toBe(true);
  });

  it('should render search tag buttons on given array', () => {
    const tagsList = ['one', 'two'];
    const renderList = [];

    tagsList
      .map((listItem) => <Button className="tag">{listItem}</Button>)
      .forEach((item) => renderList.push(item));

    expect(renderList.length).toEqual(tagsList.length);

    expect(component.find('ul').children()).toHaveLength(renderList.length);
  });
});
