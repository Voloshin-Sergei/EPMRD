import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard } from './MovieCard';

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