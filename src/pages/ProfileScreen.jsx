import React from "react";
import { useAuth } from "../AuthContext";
const ProfileScreen = () => {
  const { user, logout } = useAuth();
  return (
    <div className="w-full">
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="/images/users/1.png" alt="" />

          <div className="proflieScreen_details">
            <h2>{user.user.name}</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
