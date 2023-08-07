// TMDB.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tmdbApi = () => {
  const apikey = import.meta.env.VITE_TMDB_KEY;

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
        query: ({ genreOrCategoryName, page, searchQuery }) => {
          // get movies by search Query
          if (searchQuery) {
            return `/search/movie?query=${searchQuery}&page=${page}&api_key=${apikey}`;
          }

          //by category name
          if (genreOrCategoryName && typeof genreOrCategoryName === "string") {
            return `/movie/${genreOrCategoryName}?page=${page}&api_key=${apikey}`;
          }

          //by genre id
          if (genreOrCategoryName && typeof genreOrCategoryName === "number") {
            return `/discover/movie?with_genres=${genreOrCategoryName}&page=${page}&api_key=${apikey}`;
          }

          //get popular movies
          return `/movie/popular?page=${page}&api_key=${apikey}`;
        },
      }),
    }),
  });
};

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi(); // Export the useGetMoviesQuery hook
