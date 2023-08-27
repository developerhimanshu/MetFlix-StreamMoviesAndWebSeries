import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetActorMovieRecommendationQuery,
} from "../services/TMDB";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import OtherMovies from "../components/OtherMovies";
const ActorPage = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorDetailsQuery({ actor_id: id });
  const img = data ? data.profile_path : null;

  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetActorMovieRecommendationQuery({ actor_id: id });
  console.log(recommendations);
  return isFetching ? (
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
            <p className="text-5xl text-center">{data.name}</p>
            <p className="mt-[-20px] text-xl">{data.birthday}</p>
          </div>
          <p className="text-3xl">Biography</p>
          <p className="mt-[-15px]">{data.biography}</p>

          <Grid item container style={{ marginTop: "2rem" }}>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[3rem] gap-[1rem]">
              <Grid item xs={12} sm={6}>
                <ButtonGroup size="small" variant="outlined">
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.imdb.com/name/${data?.imdb_id}`}
                  >
                    IMDB
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>

      <Box marginTop="5rem" width="100%">
        <Typography variant="h3" gutterBottom align="center" color="white ">
          More Movies from {data.name}
        </Typography>
        {recommendations?.cast ? (
          <OtherMovies movies={recommendations.cast} />
        ) : (
          <Box>Sorry nothing was found.</Box>
        )}
      </Box>
    </div>
  );
};

export default ActorPage;
