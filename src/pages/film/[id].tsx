import React from 'react';
import styled from 'styled-components';
import { MovieInfo } from 'Components/Header/MovieInfo';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';
import { Movie } from 'Components/Main/MoviesList';

const PageStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const response = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

const Index = ({ data }: { data: Movie }) => {
  return (
    <ErrorBoundary>
      <PageStyled>
        <MovieInfo movie={data} />
        <Main />
        <Footer />
      </PageStyled>
    </ErrorBoundary>
  );
};

export default Index;
