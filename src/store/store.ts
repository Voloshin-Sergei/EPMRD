import { createStore, applyMiddleware, compose, Store, Action } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { SearchMoviesActionTypes } from './types';

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

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
