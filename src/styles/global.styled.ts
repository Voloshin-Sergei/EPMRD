import { createGlobalStyle } from 'styled-components';
import { colors } from './variables/colors.styled';
import { breakpoints } from './variables/responsive.styled';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  transition: all 0.1s ease-in-out;
}

#root {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  min-height: 100%;
  margin: 0 auto;
}

html {
  height: 100%;
  font-size: 10px;

  @media screen and (max-width: ${breakpoints.mobileSm}) {
    font-size: 9px;
  }
}

body {
  height: 100%;
  
}

a {
  text-decoration: none;
}

.red {
  color: ${colors.colorRatingLow};
}

.orange {
  color: ${colors.colorRatingAverage};
}

.green {
  color: ${colors.colorRatingHigh};
}
`;
