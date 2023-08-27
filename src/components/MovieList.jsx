import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const MovieList = ({ movies, bg }) => {
  return (
    <div
      className={`min-h-screen flex flex-wrap sm:justify-between overflow-auto justify-center bg-${bg} text-white/80`}
    >
      {movies.results.slice(0, 18).map((movie, i) => (
        <Link
          to={`/movie/${movie.id}`}
          className="items-center font-bold sm:flex sm:flex-col hover:cursor-pointer"
          key={i}
        >
          <Movie movie={movie} i={i} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
