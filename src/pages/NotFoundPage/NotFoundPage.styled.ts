import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variables';
import { fonts } from '../../styles/variables/fonts.styled';

export const Container = styled.div`
  padding: 5rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.colorSecondary};
  font-weight: ${fonts.fontWeightMedium};
  font-size: 10rem;
`;
export const Error = styled.span`
  color: ${colors.colorPrimary};
  font-size: 5rem;
  text-transform: uppercase;
`;

export const Describe = styled.p`
  margin-bottom: 2rem;
  color: ${colors.colorPrimary};
  font-size: 3rem;
`;

export const HomepageLink = styled(Link)`
  display: inline-block;
  padding: 1.2rem;
  color: ${colors.colorSecondary};
  font-size: 2rem;
  background-color: ${colors.colorPrimaryDarken};
  border-radius: 5px;
  :hover {
    background-color: ${colors.colorPrimary};
  }
`;
