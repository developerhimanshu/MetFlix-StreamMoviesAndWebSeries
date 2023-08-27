import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../services/TMDB";
import MovieList from "./MovieList";
import { CircularProgress, Typography, Box } from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const btnClass = "bg-yellow-500 p-2 rounded-md hover:bg-yellow-600";
  const { data, error, isFetching } = useGetMoviesQuery({
    genreOrCategoryName,
    page,
    searchQuery,
  });
  useEffect(() => {
    setPage(1); // Reset the page to 1 when changing genres
  }, [genreOrCategoryName]);

  const pageDown = (event) => {
    if (page == 1) {
      event.target.disabled = true;
    } else {
      setPage(page - 1);
    }
  };
  const pageUp = (event) => {
    setPage(page + 1);
  };

  if (isFetching) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        className="h-screen items-center bg-black"
      >
        <CircularProgress size="5rem" />
      </Box>
    );
  }
  if (!data.results?.length) {
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
    <div className="bg-black flex flex-col items-center py-5">
      <MovieList movies={data} bg="black" />
      <div className="flex items-center gap-2">
        <button className={btnClass} onClick={pageDown}>
          <FaAngleLeft size={30} />
        </button>
        <p className="text-white text-3xl p-2">{page}</p>
        <button className={btnClass} onClick={pageUp}>
          <FaAngleRight size={30} />
        </button>
      </div>
    </div>
  );
};
export default Movies;
