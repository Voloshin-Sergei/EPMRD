import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/variables';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }

`;

export const LoaderStyled = styled.div`
width: 8rem;
  height: 8rem;
  margin: auto;

  ::after {
  display: block;
  width: 8rem;
  height: 8rem;
  margin: 0.8rem;
  border: 1rem solid ${colors.colorSecondary};
  border-color: ${colors.colorSecondary} transparent ${colors.colorSecondary} transparent;
  border-radius: 50%;
  animation: ${spinner} 1.2s linear infinite;
  content: ' ';
`;
