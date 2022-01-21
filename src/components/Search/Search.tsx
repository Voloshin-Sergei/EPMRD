import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Button } from 'Components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { SearchTag } from 'Components/Header/Header';
import { RootState } from 'Store/reducers';
import { setCategory, setInputValue } from 'Store/actions/searchMovieAction';
import { useQuery } from 'Helpers/useQuery';
import {
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledButtonsContainer,
  StyledButtonsContainerDesc,
  StyledList,
  StyledListItem,
} from './Search.styled';

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  // const { pathname } = useLocation();
  // const { push } = useHistory();
  // const query = useQuery();
  // const searchParam = query.get('search');
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.searchMovieReducer);
  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   if (searchParam) {
  //     setSearchValue(searchParam);
  //     dispatch(setInputValue(searchParam));
  //   }
  // }, [searchParam]);

  const handleCategoryClick = (activeCategory: string) => () => {
    dispatch(setCategory(activeCategory));
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setInputValue(searchValue));
    // if (searchValue) {
    //   push({
    //     pathname,
    //     search: `?search=${searchValue}`,
    //   });
    // }
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <StyledTitle>find your movie</StyledTitle>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput
          type="text"
          placeholder="search movie"
          value={searchValue}
          onChange={handleSearchValue}
        />
        <StyledButtonsContainer>
          <StyledButtonsContainerDesc>search by</StyledButtonsContainerDesc>
          <StyledList>
            {searchTags.map((tag: SearchTag, index: number) => (
              <StyledListItem key={`${tag.label}_${index}`}>
                <Button
                  onClick={handleCategoryClick?.(tag.type)}
                  dataTestId="search-tag-btn"
                  active={tag.type === category}
                  typeBtn="sortTagBtn"
                >
                  {tag.label}
                </Button>
              </StyledListItem>
            ))}
          </StyledList>
          <Button dataTestId="search-btn" onClick={handleSubmit} typeBtn="searchBtn">
            search
          </Button>
        </StyledButtonsContainer>
      </StyledForm>
    </>
  );
};
