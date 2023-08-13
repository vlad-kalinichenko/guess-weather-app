import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { errorHandler } from '@/services/errorHandler';
import { weatherApi } from '@/api/weather';

const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(errorHandler, weatherApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
