import React from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import { FaHeart, FaList } from "react-icons/fa";
const ProfileScreen = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const btnClass =
    "px-3 bg-red-600 py-2 text-[20px] rounded-xl w-[150px] text-center flex flex-col items-center justify-center active:bg-red-700";
  return (
    <div className="w-[89vw] profileScreen">
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info flex flex-col lg:flex lg:flex-row lg:items-center">
          <img src="/images/users/1.png" alt="" />
          <div className="proflieScreen_details text-center">
            <p className="text-2xl h-[60px] font-semibold bg-gray-500 flex items-center justify-center">
              Welcome, {user.user?.name ? user.user.name : user.name}
            </p>
            <div className="profileScreenPlans">
              <h3>Plans</h3>
              <button onClick={() => logout()} className={btnClass}>
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex gap-6">
            <Link to="/favourites" className={btnClass}>
              <FaHeart size={40} />
              <p className="text-2xl">Favourties</p>
            </Link>
            <Link to="/watchlater" className={btnClass}>
              <FaList size={35} />
              <p className="text-2xl">Watch List</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
