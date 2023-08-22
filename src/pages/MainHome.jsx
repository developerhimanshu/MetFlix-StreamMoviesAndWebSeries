import React from "react";
import Movies from "../components/movies";

function MainHome() {
  return (
    <div className="flex  flex-col flex-1 overflow-x-hidden">
      <Movies />
    </div>
  );
}

export default MainHome;
