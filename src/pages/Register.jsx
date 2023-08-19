import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navi } from "../components/NavbarLandingPage";
import Loading from "./loading";

function Register() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://metflix-backend.onrender.com/api/v1/auth/register",
        formData
      );
      login(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="signInScreen">
      <Navi />
      {loading ? (
        <Loading />
      ) : (
        <>
          <form className="signInForm signUpForm" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Sign Up</h1>

            <input
              placeholder="Name"
              name="name"
              value={formData.name}
              type="text"
              onChange={handleChange}
              required
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Sign Up</button>
            <Link to="/login">
              Already have an account?{" "}
              <button className="sign">sign In!</button>
            </Link>
          </form>
        </>
      )}
    </div>
  );
}

export default Register;
