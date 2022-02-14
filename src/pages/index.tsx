import React from 'react';
import styled from 'styled-components';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';

const PageStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const Index = () => {
  return (
    <ErrorBoundary>
      <PageStyled>
        <Header />
        <Main />
        <Footer />
      </PageStyled>
    </ErrorBoundary>
  );
};
export default Index;
