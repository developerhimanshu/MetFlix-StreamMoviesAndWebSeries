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
      getRecommendation: builder.query({
        query: ({ movie_id, list }) =>
          `/movie/${movie_id}/${list}?api_key=${apikey}`,
      }),
      getVideos: builder.query({
        query: ({ movie_id }) => `/movie/${movie_id}/videos?api_key=${apikey}`,
      }),
      getActorDetails: builder.query({
        query: ({ actor_id }) => `/person/${actor_id}?api_key=${apikey}`,
      }),
      getActorMovieRecommendation: builder.query({
        query: ({ actor_id }) =>
          `/person/${actor_id}/movie_credits?api_key=${apikey}`,
      }),
    }),
  });
};

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetRecommendationQuery,
  useGetVideosQuery,
  useGetActorDetailsQuery,
  useGetActorMovieRecommendationQuery,
} = tmdbApi();
