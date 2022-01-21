import { createStore, applyMiddleware, compose, Store, Action } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { SearchMoviesActionTypes } from './types';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line
export const composeEnhancers =
  (typeof window !== 'undefined' && (window as any)).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;
export const store: Store<RootState, Action<SearchMoviesActionTypes>> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export const persistor = persistStore(store);
