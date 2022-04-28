import React from 'react';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store/store';
import { GlobalStyle } from '../styles/global.styled';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
