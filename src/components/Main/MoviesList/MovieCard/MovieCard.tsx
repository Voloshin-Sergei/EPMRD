import React from 'react';
import { Link } from 'react-router-dom';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
import { onErrorHandler } from 'Helpers/onErrorCover';
import {
  StyledMovie,
  StyledMoviePoster,
  StyledMovieVote,
  StyledMovieInfo,
  StyledTitle,
  StyledMovieYear,
  StyledMovieGenres,
  StyledMovieGenre,
} from './MovieCard.styled';

export interface MovieCardProps {
  id: number;
  year: string;
  title: string;
  poster: string;
  genres: string[];
  rating: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  year,
  title,
  poster,
  genres,
  rating,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <StyledMovie>
        <StyledMoviePoster src={poster} alt={title} onError={onErrorHandler} />
        <StyledMovieVote rate={setRateColorStyle(rating)}>{rating}</StyledMovieVote>
        <StyledMovieInfo>
          <StyledTitle>{title}</StyledTitle>
          <StyledMovieYear>{shortYear(year)}</StyledMovieYear>
        </StyledMovieInfo>
        <StyledMovieGenres>
          {genres.map((genre: string, index) => (
            <StyledMovieGenre key={`${genre}_${index}`}>{genre}</StyledMovieGenre>
          ))}
        </StyledMovieGenres>
      </StyledMovie>
    </Link>
  );
};
