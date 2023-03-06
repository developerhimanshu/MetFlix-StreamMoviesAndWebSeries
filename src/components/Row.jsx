import axios from '../axios'
import React, { useEffect, useState } from 'react'

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const base_url =  `https://image.tmdb.org/t/p/original/`
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(
                request.data.results
            )
            return request;
        }
        fetchData();
    }, [])

    console.log(movies)
    const movieCards = movies.map((movie, index)=>(
        (isLargeRow && movie.poster_path||
            !isLargeRow && movie.backdrop_path)&&
            (
                <div className='card' key={movie.id}>
            
                <img 
                className={`row_poster ${isLargeRow &&"row_posterLarge"}`}
                src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                <p>{movie?.name||movie?.title||movie?.original_name}</p>
                <div className="other-details">
                    <p className='year'>{movie.first_air_date?.substring(0, 4)
    }</p>
                    <p>Rating:{movie?.vote_average}/10</p>
                </div>
            </div>
            )
        
       
    ))
  return (

    <div className='row'>
        <div className="title">    
            <h2>{title}</h2>
            <div className='hr'/>
        </div>
        <div className="cards">
            {movieCards}
        </div>
    </div>
  )
}

export default Row