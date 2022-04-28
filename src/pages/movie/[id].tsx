import React from 'react';
import { GetServerSideProps } from 'next';
import { api } from 'API/api';
import { MovieInfo } from 'Components/Header/MovieInfo';
import { Movie } from 'Components/Main/MoviesList';
import { Layout } from 'Components/layout';

interface DynamicPageProps {
  movie: Movie;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const data = await api.getMovie(id as string);
  const movie = data.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie },
  };
};

const DynamicPage: React.FC<DynamicPageProps> = ({ movie }) => {
  return (
    <Layout>
      <MovieInfo movie={movie} />
    </Layout>
  );
};

export default DynamicPage;
