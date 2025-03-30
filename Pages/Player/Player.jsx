import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
    
    let {id} =useParams();

    const navigate=useNavigate();

    let [apiData,setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTQwMDU4YWFhYTIyMGM5Mjg4OGZmOWI5MzA1ZjM3ZSIsIm5iZiI6MTc0MzMwNDY1Mi43MDIwMDAxLCJzdWIiOiI2N2U4YjdjYzdhNzUyOTRiNzZjNjhlYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4Bbre5H2UC7Nt2qAgkENCoqK-_Z2o19cfNE17_MuvVg'
        }
      };
      
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[])

  return (
    <div className='player'>
       <img src={back_arrow_icon} alt=""  onClick={()=>{navigate(-2)}}/>
       <iframe width="90%" height="90%" src={`http://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="player-info">
         <p>{apiData.published_at.slice(0,10)}</p>
         <p>{apiData.name}</p>
         <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player