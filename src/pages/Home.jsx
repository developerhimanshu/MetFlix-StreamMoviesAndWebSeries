import React, { createContext, useContext, useState } from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import Accordian from "../components/Accordian";
import Navbar from "../components/NavbarLandingPage";

const signInContext = createContext();

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <JumbotronContainer />
      <Accordian />
    </div>
  );
};

export { signInContext };
export default Home;
