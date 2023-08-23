import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMovie } from "../features/currentGenreOrCategory";

function Search() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(searchMovie(query));
    setQuery("");
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center items-center w-[100%] text-white/60">
      <input
        type="text"
        className="bg-transparent border-2 rounded-2xl er-solid border-white/60 outline-none px-2 py-1 w-[40vw]"
        onKeyDown={handleKeyPress}
        placeholder="Search your favourite movie..."
        value={query} // Bind the input value to the query state to set the input empty after searching
        onChange={(e) => setQuery(e.target.value)}
      />
      <AiOutlineSearch
        size={25}
        className="ml-[-30px] cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}

export default Search;
