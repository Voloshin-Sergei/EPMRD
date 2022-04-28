import styled from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';
import { fonts } from '../../../styles/variables/fonts.styled';
import { breakpoints } from '../../../styles/variables/responsive.styled';

interface StyledMovieVoteProps {
  rate: string;
}

export const StyledContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 12rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem 1rem 5rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 2rem 5rem 1rem 5rem;
  }
`;

export const StyledSiteName = styled.span`
  color: ${colors.colorSecondary};
  font-size: 3rem;
  text-transform: uppercase;
`;
export const StyledBody = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 5rem;

  @media screen and (max-width: ${breakpoints.mobileLg}) {
    flex-direction: column;
    padding: 2rem 2rem;
  }
`;

export const StyledMovieCover = styled.div`
  min-width: 30rem;
  max-width: 30rem;

  @media screen and (max-width: ${breakpoints.mobileLg}) {
    max-width: 20rem;
  }
`;

export const StyledMovieCoverImg = styled.img`
  width: 100%;
`;

export const StyledMovieInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledTitle = styled.h1`
  color: ${colors.colorSecondary};
  font-size: 3.5rem;
`;

export const StyledMovieVote = styled.span<StyledMovieVoteProps>`
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  font-size: 2rem;
  text-align: center;
  vertical-align: middle;
  border: 2px solid white;
  border-radius: 50%;
  color: ${(props) => props.rate};
`;

export const StyledMovieTagline = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const StyledAdditionMovieInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const StyledMovieYear = styled.span`
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const StyledMovieRuntime = styled.span`
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const StyledMovieDescription = styled.p`
  color: ${colors.colorPrimary};
  font-weight: ${fonts.fontWeightLight};
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const StyledGenreContent = styled.div`
  background-color: ${colors.colorPrimaryDarkLight};
`;

export const StyledMovieGenre = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 5rem;
  font-size: 1.8rem;
`;
