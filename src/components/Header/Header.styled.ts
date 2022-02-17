import styled from 'styled-components';
import { colors } from '../../styles/variables/colors.styled';
import { breakpoints } from '../../styles/variables/responsive.styled';
import { fonts } from '../../styles/variables/fonts.styled';

export const StyledHeader = styled.header`
  background: linear-gradient(${colors.colorPrimaryShade}, ${colors.colorPrimaryShade}),
    url('/assets/header_bg.jpg') no-repeat center / cover;
`;
