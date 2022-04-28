import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import {
  StyledContainer,
  StyledError,
  StyledTitle,
  StyledDescribe,
  StyledLink,
} from './404.styled';

const NotFoundPage: React.FC = () => {
  const route = useRouter();

  return (
    <StyledContainer>
      <Head>
        <title>Error 404</title>
      </Head>
      <StyledError>error</StyledError>
      <StyledTitle>404</StyledTitle>
      <StyledDescribe>{`Sorry, ${route.asPath.slice(1)} page can't be found`}</StyledDescribe>
      <Link href="/">
        <StyledLink>Go to Homepage</StyledLink>
      </Link>
    </StyledContainer>
  );
};

export default NotFoundPage;
