import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import Sidebar from "../components/sidebar";
import { auth } from "../firebase";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Sidebar />
      <div>
        <Nav />
        <div className="profileScreen_body">
          <h1>Edit Profile</h1>
          <div className="profileScreen_info">
            <img src="/images/users/1.png" alt="" />

            <div className="proflieScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreenPlans">
                <h3>Plans</h3>
                <button
                  onClick={() => auth.signOut()}
                  className="profileScreen_signout"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
