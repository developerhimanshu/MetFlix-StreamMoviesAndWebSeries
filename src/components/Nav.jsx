import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

function Nav() {
  const navigate = useNavigate();

  const navClass = "nav sticky top-0 z-10";
  return (
    <div className={navClass}>
      <div className="nav_content flex px-4 ">
        <Search />
        <img
          onClick={() => {
            navigate("/profile");
          }}
          className="nav_avatar cursor-pointer"
          src="/images/users/1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
