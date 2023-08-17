import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Navi />
      <div className="navi-body">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex">
          <input
            type="email"
            placeholder="Email address"
            required
            className="w-[20vw] px-4 text-black outline-none border-none"
          />
          <Link
            to="/login"
            className="bg-[#E50914] flex items-center h-[60px] justify-center"
          >
            <p className="p-0 m-0 bg-[#E50914]"> Get Started </p>
            {<AiOutlineRight className="icon" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navi = () => {
  return (
    <div className="pt-4 flex justify-between px-6">
      <Link to="/">
        <img src="/images/misc/logo.svg" alt="" className="w-[150px]" />
      </Link>
      <Link to="/login" className="bg-[#E50914] py-2 px-5 rounded-lg">
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;
export { Navi };
