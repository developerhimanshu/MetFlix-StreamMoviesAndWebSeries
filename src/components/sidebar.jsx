import React from "react";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../services/TMDB";
import { Box, CircularProgress } from "@mui/material";
const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];
// const demoCategories = ["Comedy", "Acton", "Horror", "Animation"];
const Sidebar = () => {
  const { data, isLoading } = useGetGenresQuery();
  console.log(data);
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  return (
    <div className="text-white  sticky left-0 top-0  bg-black p-3 h-[100vh] w-[13vw] flex flex-col  border-r border-[#2a2a2a] overflow-y-scroll overflow-x-hidden">
      <Link to="/">
        <img
          className=""
          onClick={() => {
            navigate("/");
          }}
          src="/images/misc/logo.svg"
          alt=""
        />
      </Link>
      <div className="sidebar flex flex-col h-screen ">
        <p className="text-[#787878] mt-6">Categories</p>
        <div className="w-full flex flex-col align-center ">
          {categories.map(({ label, value }) => (
            <Link key={value} to={`/${value}`}>
              {label}
            </Link>
          ))}
        </div>
        <div className="p-[1.5rem]"></div>
        <p className="text-[#787878]">Generes</p>
        <div className="w-full flex flex-col align-center">
          {data.genres?.map(({ id, name }) => (
            <Link key={id} to={`genres/${id}`}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
