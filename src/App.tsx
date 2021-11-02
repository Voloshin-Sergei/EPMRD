import React, { useState } from 'react';
import { Header } from 'Components/Header';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Footer';
import { ErrorBoundary } from 'Components/ErrorBoundary';

import './style.scss';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (inputSearchValue: string) => {
    setSearchValue(inputSearchValue);
  };

  return (
    <ErrorBoundary>
      <Header handleChange={handleChange} />
      <Main searchValue={searchValue} />
      <Footer />
    </ErrorBoundary>
  );
};
