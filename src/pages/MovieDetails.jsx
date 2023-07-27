import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { API_KEY } from "../Request";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
      );
      setMovie(data);
      setLoading(false);
    };
    fetchMovieDetails();
  }, [params.id]);
  const img = movie ? movie.backdrop_path : null;

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="movie-details">
      <Nav />
      <div className="movie">
        <div
          className="movie-poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${img})`,
          }}
        >
          <div className="movie_details bg-black/50 z-1">
            <h1 className="movie_title">{movie.title}</h1>
            <div className="movie_buttons">
              <button>play</button>
              <button>Watch Later</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
