import React from 'react';
import { render } from 'enzyme';
import { Main } from './Main';

describe('Main component', () => {
  it('should render Main component', () => {
    const searchValue = 'test_value';

    const component = render(<Main searchValue={searchValue} />);
    expect(component).toMatchSnapshot();
  });
});
