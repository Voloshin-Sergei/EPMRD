import 'jsdom-global/register';
import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Provider, useSelector, useDispatch } from 'react-redux';
// import store from 'Store/store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Search } from './Search';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {};
const store = mockStore(() => initialState);

// const Wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

const tagsList = [
  { label: 'one', type: 'one' },
  { label: 'two', type: 'two' },
];

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

beforeEach(() => {
  jest.clearAllMocks();
});

const Wrapper = (children: any) => {
  return <Provider store={store}>{children}</Provider>;
};

describe('Search component', () => {
  const component = render(
    <Wrapper>
      <Search searchTags={tagsList} />
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

// describe('Search component buttons', () => {
//   const component = mount(
//     <Wrapper>
//       <Search searchTags={tagsList} />
//     </Wrapper>,
//   );

//   it('should click on search button', () => {
//     const submitBtn = component.find('[data-test-id="search-btn"]');
//     submitBtn.simulate('click');
//     console.log(mockDispatch.mock.calls[0][0]);
//     expect(mockDispatch.mock.calls[0][0]);
//   });
// });
