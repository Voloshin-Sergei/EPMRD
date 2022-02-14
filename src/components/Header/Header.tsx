import React from 'react';
import { Search } from 'Components/Search';
import { MoviesFilter } from 'Components/Header/MoviesFilter';
import { StyledContent, StyledHeader, StyledTitle } from './Header.styled';

export interface SearchTag {
  label: string;
  type: string;
}

const searchTags: SearchTag[] = [
  { label: 'title', type: 'title' },
  { label: 'genre', type: 'genres' },
];

const filterTags: FilterTag[] = [
  { label: 'release date', type: 'release_date' },
  { label: 'rating', type: 'vote_average' },
];
export interface FilterTag {
  label: string;
  type: string;
}

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledContent>
        <StyledTitle>Movieroulette</StyledTitle>
        <Search searchTags={searchTags} />
      </StyledContent>
      <MoviesFilter filterTags={filterTags} />
    </StyledHeader>
  );
};
