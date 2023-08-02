import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from "../Request";
import Row from "../components/Row";
import Sidebar from "../components/sidebar";
import Movies from "../components/Movies";

function MainHome() {
  return (
    <div className="mainHome flex w-[100vw]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <Nav />
        <Movies />
        {/* <div className="bg-black">
          <Banner />
          <div className="pl-[2.7rem]">
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
            <Row
              title="Top Rated"
              fetchUrl={requests.fetchTopRated}
              isLargeRow
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MainHome;
