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
    <div className="nav">
      <div className="nav_content flex px-4">
        <div className="text-white">Search...</div>
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
