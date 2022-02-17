import React from 'react';
import { GetServerSideProps } from 'next';
import { MovieInfo } from 'Components/Header/MovieInfo';
import { Movie } from 'Components/Main/MoviesList';
import { Layout } from 'Components/layout';

interface IndexProps {
  data: Movie;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
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

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <Layout>
      <MovieInfo movie={data} />
    </Layout>
  );
};

export default Index;
