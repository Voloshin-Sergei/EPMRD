import React from 'react';
import { render } from 'enzyme';
import { Main } from './Main';

describe('Main component', () => {
  it('should render Main component', () => {
    const onClick = () => {};
    const component = render(<Main onClick={onClick} />);
    expect(component).toMatchSnapshot();
  });
});
