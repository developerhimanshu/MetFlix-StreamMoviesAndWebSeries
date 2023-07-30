import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="text-white  z-10 fixed top-[3.5rem] bg-black p-3 h-[100vh] w-[12vw] flex justify-center border-r border-[#2a2a2a]">
      <div className="sidebar flex flex-col ">
        <p className="text-[#787878]">Categories</p>
        <div className="w-full flex flex-col align-center h-[90vh]">
          <Link to="/">Comedy</Link>
          <Link to="/pro">Action</Link>
          <Link to="/profile">Horror</Link>
          <Link to="/profile">Animation</Link>
          <Link to="/profile" className="relative bottom-0">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
