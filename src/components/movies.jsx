import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../services/TMDB";
import MovieList from "./MovieList";
import { CircularProgress, Typography, Box } from "@mui/material";
const Movies = () => {
  const { data, error, isLoading } = useGetMoviesQuery();

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }
  if (error) {
    return "An error has occured";
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};
export default Movies;