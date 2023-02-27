import React, { useEffect, useState } from 'react'
import requests from '../Request';
import instance from '../axios';
import axios from '../axios';


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request;
        }
        fetchData()
    }, [])

    console.log(movie)
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1)+"...":string;
    }
  return (
    <header className = "banner"
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.name||movie?.title||movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button >Play</button>
                    <button className='watch-later-button'>Watch later</button>
                </div>
                <h1 className="banner_discription">
                    {truncate(`${movie?.overview}`, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" >
                
            </div>

   
    </header>
  )
}

export default Banner