import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import MovieList from "../components/MovieList";
import { API_KEY } from "../Request";
import {
  Box,
  CircularProgress,
  Grid,
  ButtonGroup,
  Button,
  Rating,
  Typography,
  Modal,
} from "@mui/material";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";
import { useGetRecommendationQuery } from "../services/TMDB";

const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const navigate = useNavigate();
  let genreBtns = "";
  const token = localStorage.getItem("token");

  const [favMovieData, setFavMovieData] = useState(null);
  const [watchMovieData, setWatchMovieData] = useState(null);
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationQuery({
      list: "/recommendations",
      movie_id: params.id,
    });
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://metflix-backend.onrender.com/api/v1/movie/favourite",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavMovieData(response.data.movies);
    };
    getData();
  }, [token]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://metflix-backend.onrender.com/api/v1/movie/watchlater",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWatchMovieData(response.data.movies);
    };
    getData();
  }, [token]);

  // Update the state variables directly without arrow functions
  useEffect(() => {
    setIsFavorite(favMovieData?.some((data) => data.movieId === params.id));
    setIsWatchLater(watchMovieData?.some((data) => data.movieId === params.id));
  }, [favMovieData, watchMovieData, params.id]);

  const addToFavourite = async () => {
    try {
      const data = {
        movieId: params.id,
      };
      if (!isFavorite) {
        const response = await axios.post(
          "https://metflix-backend.onrender.com/api/v1/movie/favourite",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(!isFavorite);
        toast.success("Add to favorites"),
          {
            position: toast.POSITION.TOP_CENTER,
          };
      } else {
        const response = await axios.delete(
          `https://metflix-backend.onrender.com/api/v1/movie/favourite/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(!isFavorite);
        toast.success("Removed from favorites"),
          {
            position: toast.POSITION.TOP_CENTER,
          };
      }
    } catch (err) {
      console.log(err);
    }
  };
  const addToWatchLater = async () => {
    try {
      const data = {
        movieId: params.id,
      };
      if (!isWatchLater) {
        const response = await axios.post(
          "https://metflix-backend.onrender.com/api/v1/movie/watchlater",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsWatchLater(!isWatchLater);
        toast.success("Added to Watch List");
      } else {
        const response = await axios.delete(
          `https://metflix-backend.onrender.com/api/v1/movie/watchlater/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsWatchLater(!isWatchLater);
        toast.success("Removed from Watch List");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!loading) {
    genreBtns = movie.genres?.map((genre) => {
      return (
        <button
          className="text-white hover:text-gray-300"
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
  return loading || isRecommendationsFetching ? (
    <Box
      display="flex"
      justifyContent="center"
      className="h-full items-center bg-gray-700"
    >
      <CircularProgress size="8rem" />
    </Box>
  ) : (
    <div className="movie w-full bg-gray-700 py-4">
      <div className="flex lg:flex-row flex-col items-center lg:items-start w-[100%] pt-10  text-white justify-around gap-4">
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
            <div className="flex justify-between w-[70%] gap-3">
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
                        onClick={() => navigate(`/actors/${character.id}`)}
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
          <Grid item container style={{ marginTop: "2rem" }}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[3rem] gap-[1rem]">
              <Grid item xs={12} sm={6}>
                <ButtonGroup size="small" variant="outlined">
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={movie?.homepage}
                  >
                    Website
                  </Button>
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.imdb.com/title/${movie?.imdb_id}`}
                  >
                    IMDB
                  </Button>
                  <Button onClick={() => {}} href="#">
                    Trailer
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ButtonGroup size="small" variant="outlined">
                  <Button onClick={addToFavourite}>
                    {isFavorite ? (
                      <p className="flex items-center gap-2">
                        UnFavourite
                        <AiFillHeart size={18} />
                      </p>
                    ) : (
                      <p className="flex items-center gap-2">
                        Favourite
                        <AiOutlineHeart size={18} />
                      </p>
                    )}
                  </Button>
                  <Button onClick={addToWatchLater}>
                    {isWatchLater ? (
                      <p className="flex items-center gap-2">
                        Watchlist
                        <AiFillMinusCircle size={18} />
                      </p>
                    ) : (
                      <p className="flex items-center gap-2">
                        Watchlist
                        <AiFillPlusCircle size={18} />
                      </p>
                    )}
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center" color="white ">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} bg="gray-700" />
        ) : (
          <Box>Sorry nothing was found.</Box>
        )}
      </Box>
      <p>Trailer</p>
      <div>
        {movie?.videos?.results?.length > 0 && (
          <iframe
            autoPlay
            className=""
            frameBorder="0"
            title="trailer"
            src={`https://www.youtube.com/{movie?.vidoes?.results[0].key}`}
            allow="autoplay"
          />
        )}
      </div>
      <ToastContainer position="top-center" autoClose={500} />
    </div>
  );
};

export default MovieDetails;
