import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Grow, Typography, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";
const Movie = ({ movie, i }) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className="p-[10px]">
      {/* <img src={`${base_url}${movie.backdrop_path}`} className="w-[230px]" /> */}
      <Grow in key={i} timeout={(i + 1) * 250}>
        <div className="flex flex-col items-center">
          <img
            alt={movie.title}
            className="rounded-[20px] h-[300px] mb-[10px] hover:[transform-cpu scale-105] md:max-w-[13vw] sm:max-w-[30vw] max-w-[40vw]"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://picsum.photos/640/360"
            }
          />
          <Typography
            className="text-ellipsis w-[200px] whitespace-nowrap overflow-hidden mt-[10px] mb-0 text-center"
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </div>
      </Grow>
    </Grid>
  );
};

export default Movie;
