import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
// import { Search } from "@mui/material/Icon";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchMovie } from "../features/currentGenreOrCategory";

function Search() {
  const disptach = useDispatch();
  const [query, setQuery] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      disptach(searchMovie(query));
    }
  };

  return (
    <div className="flex justify-center items-center w-[100%] text-white/60">
      <input
        type="text"
        className="bg-transparent border-2 rounded-2xl er-solid border-white/60 outline-none px-2 py-1 w-[40vw]"
        onKeyDown={handleKeyPress}
        onChange={(e) => setQuery(e.target.value)}
      />
      <AiOutlineSearch
        size={25}
        className="ml-[-30px] cursor-pointer"
        onClick={() => {
          disptach(searchMovie(query));
        }}
      />
    </div>
  );
}

export default Search;
