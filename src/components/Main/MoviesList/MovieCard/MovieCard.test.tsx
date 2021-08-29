import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MovieCard } from './MovieCard';
Enzyme.configure({ adapter: new Adapter() });

const props = {
  year: "2021",
  title: "test title",
  poster: "test cover",
  genres: ["test genre_1", "test genres_2"]
}

describe("MovieCard component", () => {
    it('should render MovieCard component', () => {
    const component = shallow(<MovieCard {...props}/>);
    expect(component).toMatchSnapshot();
  });
});