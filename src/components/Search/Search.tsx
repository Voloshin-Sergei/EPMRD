import React, { useState, useEffect } from 'react';
import { SearchTag } from 'src/pages';
import { Button } from 'Components/common/Button';
import { MoviesFilter } from 'Components/Header/MoviesFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store/reducers';
import { setCategory, setInputValue } from 'Store/actions/searchMovieAction';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  StyledContent,
  StyledTitle,
  StyledTagLine,
  StyledForm,
  StyledInput,
  StyledButtonsContainer,
  StyledButtonsContainerDesc,
  StyledList,
  StyledListItem,
} from './Search.styled';

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];
export interface FilterTag {
  label: string;
  type: string;
}

export interface SearchProps {
  searchTags: Array<SearchTag>;
}

export const Search: React.FC<SearchProps> = ({ searchTags }) => {
  const { push, pathname, query } = useRouter();

  const searchParam = query.search as string;
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
      <Head>
        <title>Movieroulette</title>
      </Head>
      <StyledContent>
        <StyledTitle>Movieroulette</StyledTitle>
        <StyledTagLine>find your movie</StyledTagLine>
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
      </StyledContent>
      <MoviesFilter filterTags={filterTags} />
    </>
  );
};
