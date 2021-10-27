import React from 'react';
import { render } from 'enzyme';
import { Header } from './Header';

describe('Header component', () => {
  it('should render Header component', () => {
    const filter = 'test_filter';

    const component = render(<Header filter={filter} />);
    expect(component).toMatchSnapshot();
  });
});
