import axios from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import { Navi } from "../components/NavbarLandingPage";

const Login = () => {
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://metflix-backend.onrender.com/api/v1/auth/login",
        loginData
      );
      // console.log("response:", response.data);
      login(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="signInScreen">
      <Navi />
      <form className="signInForm signUpForm" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
        <Link to="/register">
          Don't have an account? <button className="sign">sign Up!</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
