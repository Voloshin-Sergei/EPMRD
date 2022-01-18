import styled, { css } from 'styled-components';
import { colors } from '../../../styles/variables/colors.styled';

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
  typeBtn?: 'searchBtn' | 'sortTagBtn' | 'filterTagBtn' | 'movieInfoBtn';
  active?: boolean;
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

const movieInfoBtn = css`
  color: ${colors.colorSecondary};
  font-size: 1.8rem;
  background-color: ${colors.colorPrimary};

  :hover {
    color: ${colors.colorPrimary};
    background-color: ${colors.colorSecondary};
  }

  :active {
    transform: scale(0.9);
  }
`;

const secondaryStyle = css`
  background-color: transparent;
`;

const getButtonStyles = (type?: string, active?: boolean) => {
  switch (type) {
    case 'sortTagBtn':
      if (active) return sortTagBtnActive;
      return sortTagBtn;

    case 'movieInfoBtn':
      return movieInfoBtn;

    case 'filterTagBtn':
      if (active) return filterTagBtnActive;
      return filterTagBtn;

    case 'searchBtn':
      return searchBtn;

    default:
      return '';
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  cursor: pointer;

  ${(props) => (props.variant === 'primary' ? primaryStyle : secondaryStyle)};
  ${(props) => getButtonStyles(props.typeBtn, props.active)};
`;
