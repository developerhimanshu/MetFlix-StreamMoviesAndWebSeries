import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const base_url = `https://image.tmdb.org/t/p/original/`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  // console.log(movies)
  const movieCards = movies.map((movie, index) => {
    const rel = movie.release_date ? movie.release_date : movie.first_air_date;
    return (
      ((isLargeRow && movie.poster_path) ||
        (!isLargeRow && movie.backdrop_path)) && (
        <Link to={`/${movie.id}`} key={movie.id}>
          <div
            className={`${isLargeRow ? "row_posterLarge" : "row_poster"} card`}
          >
            <img
              className={`${isLargeRow ? "ver" : "hor"} card`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <p className="title">
              {truncate(
                movie?.name || movie?.title || movie?.original_name,
                24
              )}
            </p>
            <div className="other-details">
              <p className="year">{rel.substring(0, 4)}</p>
              <p>Rating:{movie?.vote_average}/10</p>
            </div>
          </div>
        </Link>
      )
    );
  });
  return (
    <div className="row pr-0">
      <div className="title">
        <h2>{title}</h2>
        <div className="hr" />
      </div>
      <div className="cards w-[85.7vw] mr-0">{movieCards}</div>
    </div>
  );
};

export default Row;
