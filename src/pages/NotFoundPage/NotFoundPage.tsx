import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Error, Title, Describe, HomepageLink } from './NotFoundPage.styled';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Error>error</Error>
      <Title>404</Title>
      <Describe>{`Sorry, ${location.pathname.slice(1)} page can't be found`}</Describe>
      <HomepageLink to="/">Go to Homepage</HomepageLink>
    </Container>
  );
};
