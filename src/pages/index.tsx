import React from 'react';
import { Layout } from 'Components/layout';
import { Search } from 'Components/Search';

export interface SearchTag {
  label: string;
  type: string;
}

const searchTags: SearchTag[] = [
  { label: 'title', type: 'title' },
  { label: 'genre', type: 'genres' },
];

const Index = () => {
  return (
    <Layout>
      <Search searchTags={searchTags} />
    </Layout>
  );
};
export default Index;
