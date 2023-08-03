// TMDB.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tmdbApi = () => {
  const apikey = import.meta.env.VITE_TMDB_KEY;

  const page = 2;
  return createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints: (builder) => ({
      // Get Genres
      getGenres: builder.query({
        query: () => `/genre/movie/list?api_key=${apikey}&language=en-US`,
      }),

      // Get Movies by [type]
      getMovies: builder.query({
        query: () => `/movie/popular?page=${page}&api_key=${apikey}`,
      }),
    }),
  });
};

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi(); // Export the useGetMoviesQuery hook
