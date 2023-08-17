import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";
import { API_KEY } from "../Request";
import {
  Box,
  CircularProgress,
  Grid,
  ButtonGroup,
  Button,
  Rating,
  Typography,
} from "@mui/material";
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
        `https://api.themoviedb.org/3/movie/${params.id}?append_to_response=videos&append_to_response=credits&api_key=${API_KEY}&language=en-US`
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
      <CircularProgress size="8rem" />
    </Box>
  ) : (
    <div className="movie w-full bg-gray-700 h-full">
      <div className="flex w-[100%] pt-10  text-white justify-around gap-4">
        <img
          src={`https://image.tmdb.org/t/p/original${img}`}
          className="w-[250px] h-[400px] rounded-xl"
        />
        <div className="w-[60%] flex flex-col gap-8 ">
          <div className="flex flex-col items-center gap-6">
            <p className="text-5xl text-center">{movie.title}</p>
            <p className="mt-[-20px] text-xl">{movie.tagline}</p>
            <Grid item className="w-[100%] flex justify-around items-center">
              <Box display="flex" align="center">
                <Rating readOnly value={movie.vote_average / 2} />
                <Typography variant="subtitle1" gutterBottom>
                  {movie?.vote_average}/10
                </Typography>
              </Box>
              <Typography variant="h6" align="center" gutterBottom>
                {movie?.runtime}min
                {movie?.spoken_languages.length > 0
                  ? ` / ${movie?.spoken_languages[0].name}`
                  : ""}
              </Typography>
            </Grid>
            <div className="flex justify-between w-[70%]">
              {!loading && genreBtns}
            </div>
          </div>
          <p className="text-3xl">Overview</p>
          <p className="mt-[-15px]">{movie.overview}</p>
          <p className="text-3xl">Top Cast</p>
          <Grid item container spacing={2}>
            {movie &&
              movie.credits.cast
                .map((character, i) => {
                  return (
                    character.profile_path && (
                      <Grid
                        key={i}
                        item
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}
                    `}
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          className="w-[100%] max-w-[7em] h-[8em] object-cover rounded-[10px]"
                          src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                          alt={character.name}
                        />
                        <Typography>{character.name}</Typography>
                        <Typography className="text-white/50">
                          {character.character}
                        </Typography>
                      </Grid>
                    )
                  );
                })
                .slice(0, 6)}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
