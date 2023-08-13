import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { errorHandler } from '@/services/errorHandler';

const rootReducer = combineReducers({
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorHandler),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
