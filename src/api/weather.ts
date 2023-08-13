import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { TAG } from '@/constants';
import { buildQueryString } from '@/utils';
import type { CurrentWeather } from '@/models';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  tagTypes: [TAG.CURRENT_WEATHER],
  baseQuery,
  endpoints: (builder) => ({
    getCurrentWeather: builder.query<
      CurrentWeather,
      { lat: string; lon: string; units: string }
    >({
      query: (params) =>
        `/weather?appid=${WEATHER_API_KEY}&${buildQueryString(params)}`,
      providesTags: () => [TAG.CURRENT_WEATHER],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery, useLazyGetCurrentWeatherQuery } =
  weatherApi;
