import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { tweetsSlice } from './tweets/tweets-slice';
import { filtersSlice } from './filter/filter-slice';


const persistConfig = {
  key: 'tweets',
  storage,
  whitelist: ['items'],
}


export const store = configureStore({
  reducer: {
    tweets: persistReducer(persistConfig,tweetsSlice.reducer),
    filters: filtersSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
