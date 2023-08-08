import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { API_KEY } from "../Request";
import { Box, CircularProgress } from "@mui/material";
import Sidebar from "../components/sidebar";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";

const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let genreBtns = "";
  if (!loading) {
    genreBtns = movie.genres?.map((genre) => {
      return (
        <button
          className="text-white"
          onClick={() => {
            dispatch(selectGenreOrCategory(genre.id));
            navigate("/");
          }}
        >
          {genre.name}
        </button>
      );
    });
  }
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
      );
      console.log("curr", data);
      setMovie(data);
      setLoading(false);
    };
    fetchMovieDetails();
  }, [params.id]);
  const img = movie ? movie.poster_path : null;
  //backgroundImage: `url(https://image.tmdb.org/t/p/original${img})`
  return loading ? (
    <Box display="flex" justifyContent="center">
      <CircularProgress size="4rem" />
    </Box>
  ) : (
    <div className="flex  bg-black/90">
      <Sidebar />
      <div className="movie">
        <Nav />
        <div className="flex w-[100%] mt-14  text-white justify-around">
          <img
            src={`https://image.tmdb.org/t/p/original${img}`}
            className="w-[250px] rounded-xl"
          />
          <div className="w-[60%] flex flex-col gap-8 ">
            <div className="flex flex-col items-center gap-8">
              <p className="text-5xl text-center">{movie.title}</p>
              <div className="flex justify-between w-[70%]">
                {!loading && genreBtns}
              </div>
            </div>
            <p className="text-3xl">Overview</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
