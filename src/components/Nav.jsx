import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_content flex px-4">
        <img
          className="nav_logo"
          onClick={() => {
            navigate("/");
          }}
          src="/images/misc/logo.svg"
          alt=""
        />
        <div className="text-white">Search...</div>
        <img
          onClick={() => {
            navigate("/profile");
          }}
          className="nav_avatar"
          src="/images/users/1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
