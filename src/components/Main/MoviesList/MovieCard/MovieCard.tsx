import React from 'react';
import { Link } from 'react-router-dom';
import { shortYear } from 'Helpers/shortYear';
import { setRateColorStyle } from 'Helpers/setRateColorStyle';
import { onErrorHandler } from 'Helpers/onErrorCover';
import { Movie, Poster, Vote, Info, Title, Year, Genres, Genre } from './MovieCard.styled';

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
      <Movie>
        <Poster src={poster} alt={title} onError={onErrorHandler} />
        <Vote rate={setRateColorStyle(rating)}>{rating}</Vote>
        <Info>
          <Title>{title}</Title>
          <Year>{shortYear(year)}</Year>
        </Info>
        <Genres>
          {genres.map((genre: string, index) => (
            <Genre key={`${genre}_${index}`}>{genre}</Genre>
          ))}
        </Genres>
      </Movie>
    </Link>
  );
};
