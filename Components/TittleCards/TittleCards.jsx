import React, { useEffect, useRef, useState } from 'react'
import './TittleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { NavLink } from 'react-router-dom';


const TittleCards = ({title,category}) => {
    
let [apiData,setApiData] =useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTQwMDU4YWFhYTIyMGM5Mjg4OGZmOWI5MzA1ZjM3ZSIsIm5iZiI6MTc0MzMwNDY1Mi43MDIwMDAxLCJzdWIiOiI2N2U4YjdjYzdhNzUyOTRiNzZjNjhlYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4Bbre5H2UC7Nt2qAgkENCoqK-_Z2o19cfNE17_MuvVg'
        }
      };
      
     

        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
    
        },[])
  return (
    <div className='title-cards'>
       <h2>{title?title:"Popular on Netflix"}</h2>
       <div className="card-list" >
        {apiData.map((card,index)=>{
            return <NavLink to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
            </NavLink>
        })}
       </div>
     
    </div>
  )
}

export default TittleCards