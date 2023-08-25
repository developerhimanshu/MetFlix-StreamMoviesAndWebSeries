import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [menuOn, setMenuOn] = useState(false);
  const navigate = useNavigate();
  const navClass = "nav sticky top-0 z-10";
  return (
    <div className={navClass}>
      <div className="nav_content flex px-4 ">
        <button
          onClick={() => {
            setMenuOn(!menuOn);
          }}
          className="lg:hidden"
        >
          {!menuOn ? (
            <AiOutlineMenu size={30} style={{ color: "white" }} />
          ) : (
            <AiOutlineClose style={{ color: "white" }} size={30} />
          )}
        </button>
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
