import React from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const btnClass =
    "px-3 bg-red-600 py-2 text-[20px] rounded-xl w-[150px] text-center";
  return (
    <div className="w-[89vw] profileScreen">
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info flex flex-col lg:flex lg:flex-row lg:items-center">
          <img src="/images/users/1.png" alt="" />
          <div className="proflieScreen_details">
            <h2>Welcome, {user.user.name}</h2>
            <div className="profileScreenPlans">
              <h3>Plans</h3>
              <button
                onClick={() => logout()}
                className="profileScreen_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex gap-6">
            <Link to="/favourites" className={btnClass}>
              Favourties
            </Link>
            <Link to="/watchlater" className={btnClass}>
              Watch Later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
