import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'Components/common/Button';
import { setFilter } from 'Store/actions/searchMovieAction';
import { RootState } from 'Store/reducers';
import { FilterTag } from '../../Header/Header';
import {
  StyledFilter,
  StyledMoviesCount,
  StyledButtonsContainer,
  StyledButtonsContainerDesc,
  StyledList,
  StyledListItem,
} from './MoviesFilter.styled';

export interface MoviesFilterProps {
  filterTags: FilterTag[];
}

export const MoviesFilter: React.FC<MoviesFilterProps> = ({ filterTags }) => {
  const { filter, movies } = useSelector((state: RootState) => state.searchMovieReducer);

  const dispatch = useDispatch();

  const handleFilterClick = (activeFilter: string) => () => {
    dispatch(setFilter(activeFilter));
  };

  return (
    <StyledFilter>
      <StyledMoviesCount>{movies.length} movies found</StyledMoviesCount>
      <StyledButtonsContainer>
        <StyledButtonsContainerDesc>Sort by</StyledButtonsContainerDesc>
        <StyledList>
          {filterTags.map((tag: FilterTag) => (
            <StyledListItem key={tag.label}>
              <Button
                onClick={handleFilterClick?.(tag.type)}
                typeBtn="filterTagBtn"
                variant="secondary"
                dataTestId="filter-tag-btn"
                active={tag.type === filter}
              >
                {tag.label}
              </Button>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledButtonsContainer>
    </StyledFilter>
  );
};
