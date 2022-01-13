import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
  typeBtn: 'searchBtn' | 'sortTagBtn' | 'filterTagBtn' | undefined;
  active: boolean | undefined;
}

const primaryStyle = css`
  padding: 0.5rem 1rem;
  color: ${colors.colorPrimary};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const sortTagBtn = css`
  background-color: ${colors.colorPrimaryDarkLighten};

  :hover {
    background-color: ${colors.colorPrimaryDarken};
  }
`;

const sortTagBtnActive = css`
  background-color: ${colors.colorSecondary};

  :hover {
    background-color: ${colors.colorSecondary};
  }
`;

const filterTagBtn = css`
  font-size: 1.6rem;
  transform: scale(0.9);

  :hover {
    transform: scale(1);
  }
`;

const filterTagBtnActive = css`
  color: ${colors.colorSecondary};
  font-size: 1.8rem;

  :hover {
    transform: scale(0.9);
  }
`;

const searchBtn = css`
  margin-left: auto;
  font-size: 1.8rem;
  background-color: ${colors.colorSecondary};

  :hover {
    background-color: ${colors.colorSecondaryLighten};
  }

  :active {
    transform: scale(0.9);
  }
`;

const secondaryStyle = css`
  background-color: transparent;
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  border: none;
  cursor: pointer;

  ${(props) => (props.variant === 'primary' ? primaryStyle : secondaryStyle)};
  ${(props) => (props.typeBtn === 'searchBtn' ? searchBtn : '')};
  ${(props) => (props.typeBtn === 'sortTagBtn' ? sortTagBtn : '')};
  ${(props) => (props.typeBtn === 'sortTagBtn' && props.active ? sortTagBtnActive : '')};
  ${(props) => (props.typeBtn === 'filterTagBtn' ? filterTagBtn : '')};
  ${(props) => (props.typeBtn === 'filterTagBtn' && props.active ? filterTagBtnActive : '')};
`;
