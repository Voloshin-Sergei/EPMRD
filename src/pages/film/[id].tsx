import React from 'react';
import styled from 'styled-components';
import { MovieInfo } from 'Components/Header/MovieInfo';
import { Movie } from 'Components/Main/MoviesList';
import { Layout } from 'Components/layout';

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
    <Layout>
      <MovieInfo movie={data} />
    </Layout>
  );
};

export default Index;
