import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_WEATHER_API_URL,
});
