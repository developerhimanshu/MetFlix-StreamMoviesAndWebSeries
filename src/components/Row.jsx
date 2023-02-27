import axios from '../axios'
import React, { useEffect } from 'react'

const Row = ({title, fetchUrl}) => {
  
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            
        }
    }, [])


  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="cards">
            <div className="card">

            </div>
        </div>
    </div>
  )
}

export default Row