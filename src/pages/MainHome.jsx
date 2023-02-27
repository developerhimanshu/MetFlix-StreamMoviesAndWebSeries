import React from 'react'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import requests from '../Request'
import Row from '../components/Row'

function MainHome() {
  return (
    <div className = 'mainHome'>
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows  */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Trending Now'
        fetchUrl = {requests.fetchTrending}
      />
      <Row
        title='Action Movies'
        fetchUrl = {requests.fetchActionMovies}
      />
      <Row
        title='Horror Movies'
        fetchUrl = {requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title='Romance Movies'
        fetchUrl = {requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title='Comedy Movies'
        fetchUrl = {requests.fetchCommedyMovies}
        isLargeRow
      />
      <Row
        title='Top Rated'
        fetchUrl = {requests.fetchTopRated}
        isLargeRow
      />

    </div>
  )
}

export default MainHome