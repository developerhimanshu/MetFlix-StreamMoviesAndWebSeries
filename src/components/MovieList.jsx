import React from "react";
import Movie from "./Movie";

const MovieList = (movies) => {
  console.log(movies);
  return (
    <div className="min-h-screen flex flex-wrap sm:justify-between overflow-auto justify-center bg-black text-white/80">
      {movies.movies.results.map((movie, i) => (
        <Movie movie={movie} i={i} key={i} />
      ))}
    </div>
  );
};

export default MovieList;
