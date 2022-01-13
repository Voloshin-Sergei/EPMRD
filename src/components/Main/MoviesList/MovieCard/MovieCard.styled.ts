import styled from 'styled-components';
import { colors } from '../../../../styles/variables/colors.styled';
import { fonts } from '../../../../styles/variables/fonts.styled';

interface VoteProps {
  rate: string;
}

export const Movie = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
  color: ${colors.colorPrimaryDarken};
  font-weight: ${fonts.fontWeightLight};
  background-color: ${colors.colorPrimary};
  border-radius: 5px;
  box-shadow: 0 4px 5px ${colors.colorSecondaryShade};

  :hover {
    transform: translateY(-0.8rem);
  }
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Vote = styled.span<VoteProps>`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  padding: 0.25rem 0.5rem;
  font-weight: ${fonts.fontWeightMedium};
  font-size: 2rem;
  background-color: ${colors.colorPrimaryDarken};
  border-radius: 3px;
  color: ${(props) => props.rate};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Year = styled.span`
  padding: 0.3rem;
  font-size: 1.5rem;
  border: 1px solid ${colors.colorPrimaryDarken};
  border-radius: 3px;
`;

export const Title = styled.h3`
  margin-right: 2rem;
  color: ${colors.colorPrimaryDarkLighten};
  font-weight: ${fonts.fontWeightLight};
  font-size: 2.4rem;
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  list-style: none;
`;

export const Genre = styled.li`
  margin-right: 1rem;
  font-size: 1.4rem;
`;
