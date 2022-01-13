import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Button } from 'Components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { RootState } from 'Store/reducers';
import { setCategory, setInputValue } from 'Store/actions/searchMovieAction';
import { useQuery } from 'Helpers/useQuery';
import {
  Title,
  Form,
  Input,
  ButtonsContainer,
  ButtonsContainerDesc,
  List,
  ListItem,
} from './Search.styled';

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const query = useQuery();
  const searchParam = query.get('search');
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.searchMovieReducer);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchParam) {
      setSearchValue(searchParam);
      dispatch(setInputValue(searchParam));
    }
  }, [searchParam]);

  const handleCategoryClick = (activeCategory: string) => () => {
    dispatch(setCategory(activeCategory));
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setInputValue(searchValue));
    if (searchValue) {
      push({
        pathname,
        search: `?search=${searchValue}`,
      });
    }
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Title>find your movie</Title>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="search movie"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <ButtonsContainer>
          <ButtonsContainerDesc>search by</ButtonsContainerDesc>
          <List>
            {searchTags.map((tag: SearchTag, index: number) => (
              <ListItem key={`${tag.label}_${index}`}>
                <Button
                  onClick={handleCategoryClick?.(tag.type)}
                  dataTestId="search-tag-btn"
                  active={tag.type === category}
                  typeBtn="sortTagBtn"
                >
                  {tag.label}
                </Button>
              </ListItem>
            ))}
          </List>
          <Button dataTestId="search-btn" onClick={handleSubmit} typeBtn="searchBtn">
            search
          </Button>
        </ButtonsContainer>
      </Form>
    </>
  );
};
