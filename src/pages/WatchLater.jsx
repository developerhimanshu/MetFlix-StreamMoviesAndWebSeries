import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../Request";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

const WatchLater = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://metflix-backend.onrender.com/api/v1/movie/watchlater",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMovieData(response.data.movies);
    };
    getData();
  }, []);

  let [newMovieArr, setNewMovieArr] = useState([]);
  useEffect(() => {
    if (movieData) {
      setNewMovieArr([]);
      const fetchMovieDetails = async (movieId) => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos&append_to_response=credits&api_key=${API_KEY}&language=en-US`
        );
        setNewMovieArr((prevArr) => [...prevArr, data]);
      };

      movieData.forEach((movie) => {
        fetchMovieDetails(movie.movieId);
      });
    }
  }, [movieData]);

  let innerHtml;
  console.log(newMovieArr);

  if (newMovieArr.length == 0) {
    innerHtml = `You don't have any movies in Watch List currently.`;
  }

  return (
    <div className="px-4 w-full min-h-full bg-black text-white">
      <p className="text-4xl">Your Watch List:</p>
      {newMovieArr.length == 0 ? innerHtml : ""}
      <div className="min-h-screen flex flex-wrap sm:justify-between overflow-auto justify-center bg-black text-white/80">
        {newMovieArr.map((movie, i) => (
          <Link
            to={`/movie/${movie.id}`}
            className="items-center font-bold sm:flex sm:flex-col hover:cursor-pointer"
          >
            <Movie movie={movie} i={i} key={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
