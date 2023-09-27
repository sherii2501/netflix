import React, { useEffect, useState } from "react";
import tmtbAxiosInstance from "../tmtbAxiosInstance";
import './Row.css';

function Row({title,fetchUrl,isPoster}) {
  const[allMovies,setAllMovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData=async()=>{
    const {data}=await tmtbAxiosInstance.get(fetchUrl)
    setAllMovies(data.results)
  }

  // console.log(allMovies);
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div className="row">
        <h1>{title}</h1>
        <div className="movies-row">
          {
            allMovies?.map(item=>(
              <img className={`movie ${isPoster && 'movie-poster'}`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="no image" />
            ))
          }
        </div>    
    </div>
  );
}

export default Row;