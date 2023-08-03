// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { tmdbApi } from "../services/TMDB"; // Make sure to import tmdbApi

const tmdbApiInstance = tmdbApi(); // Create the tmdbApi instance
tmdbApiInstance.endpoints.getMovies?.initiate(1); // Initialize the endpoint

export default configureStore({
  reducer: {
    [tmdbApiInstance.reducerPath]: tmdbApiInstance.reducer, // Add the tmdbApi reducer to the store
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApiInstance.middleware),
});
