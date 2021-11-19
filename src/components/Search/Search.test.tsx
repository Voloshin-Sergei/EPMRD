import React from 'react';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'Store/reducers';
import { Search } from './Search';

describe('Search component', () => {
  const store = createStore(rootReducer);

  const Wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

  const tagsList = [
    { label: 'one', type: 'one' },
    { label: 'two', type: 'two' },
  ];

  const handleChange = () => {};

  const searchValue = 'test_value';

  const component = render(
    <Wrapper>
      <Search searchTags={tagsList} handleChange={handleChange} searchValue={searchValue} />
    </Wrapper>,
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
