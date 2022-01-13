import styled from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';
import { fonts } from '../../../styles/variables/fonts.styled';
import { breakpoints } from '../../../styles/variables/responsive.styled';

interface VoteProps {
  rate: string;
}

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5rem 1rem 5rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 2rem 5rem 1rem 5rem;
  }
`;

export const SiteName = styled.span`
  color: ${colors.colorSecondary};
  font-size: 3rem;
  text-transform: uppercase;
`;
export const Body = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 5rem;

  @media screen and (max-width: ${breakpoints.mobileLg}) {
    flex-direction: column;
    padding: 2rem 2rem;
  }
`;

export const Cover = styled.div`
  min-width: 30rem;
  max-width: 30rem;

  @media screen and (max-width: ${breakpoints.mobileLg}) {
    max-width: 20rem;
  }
`;

export const CoverImg = styled.img`
  width: 100%;
`;

export const TitleInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  color: ${colors.colorSecondary};
  font-size: 3.5rem;
`;

export const Vote = styled.span<VoteProps>`
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

export const Tagline = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const AdditionInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Year = styled.span`
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const Runtime = styled.span`
  color: ${colors.colorPrimary};
  font-size: 2.4rem;
`;

export const Description = styled.p`
  color: ${colors.colorPrimary};
  font-weight: ${fonts.fontWeightLight};
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const Genre = styled.div`
  padding: 1rem 5rem;
  font-size: 1.8rem;
  background-color: ${colors.colorPrimaryDarkLight};
`;
