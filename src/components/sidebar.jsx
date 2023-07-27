import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="text-white z-10 fixed top-[4.5rem] bg-black p-3 h-[100vh] w-[10vw] ">
      <div className="sidebar flex flex-col">
        <Link to="/">Movies</Link>
        <Link to="/pro">Movies</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
