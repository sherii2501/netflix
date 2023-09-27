import React, { useState,useEffect } from 'react'
import './Banner.css'
import tmtbAxiosInstance from '../tmtbAxiosInstance';

function Banner({fetchUrl}) {
    const[Movies,setMovies]=useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData=async()=>{
    const {data}=await tmtbAxiosInstance.get(fetchUrl)
    console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovies(data.results[Math.floor(Math.random()*data.results.length)])
  }

  console.log(Movies);
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{
      height:'600px',
      backgroundImage:`url(${base_url}/${Movies?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }}>
      <div className="banner-content">
        <h1>{Movies?.name}</h1>
        <h2>{Movies?.overview?.slice(0,200)}...</h2>
      </div>
    </div>
  )
}

export default Banner