import React from 'react';
import { render } from 'enzyme';
import { MoviesList } from './MoviesList';

describe('MoviesList component', () => {
  it('should render MoviesList component', () => {
    const component = render(<MoviesList />);
    expect(component).toMatchSnapshot();
  });
});
