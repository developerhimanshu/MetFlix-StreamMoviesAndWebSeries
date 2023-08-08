import React from "react";
const base_url = `https://image.tmdb.org/t/p/original/`;
import { Grid, Grow, Typography, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
const Movie = ({ movie, i }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="p-[10px]">
      {/* <img src={`${base_url}${movie.backdrop_path}`} className="w-[230px]" /> */}
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          to={`movie/${movie.id}`}
          className="items-center font-bold sm:flex sm:flex-col hover:cursor-pointer"
        >
          <img
            alt={movie.title}
            className="rounded-[20px] h-[300px] mb-[10px] hover:transform-cpu hover:scale-105 md:max-w-[13vw] sm:max-w-[30vw] max-w-[40vw]"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://picsum.photos/640/360"
            }
          />
          <Typography
            className="text-ellipsis w-[230px] whitespace-nowrap overflow-hidden mt-[10px] mb-0 text-center"
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
