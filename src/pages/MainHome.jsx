import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from "../Request";
import Row from "../components/Row";
import Sidebar from "../components/sidebar";

function MainHome() {
  return (
    <div className="mainHome">
      <Nav />
      <div className="flex">
        <div className="block w-[13rem]">
          <Sidebar />
        </div>
        <div className="top-0 w-auto bg-black pl-4">
          <Banner />
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow
          />
          <Row
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
          />
          <Row
            title="Comedy Movies"
            fetchUrl={requests.fetchCommedyMovies}
            isLargeRow
          />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
