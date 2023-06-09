import React, { useEffect, useState } from 'react'
import youtubevideoapi from '../utils/const';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {

  const[video,setVideo]=useState([]);

  useEffect(()=>{
    getapidata();
  },[]);
  
  const getapidata= async()=>{
    const data=await fetch(youtubevideoapi);
    const json=await data.json();
    setVideo(json.items);
    
  }
  return (

    <div className='flex flex-wrap'>
      
      {video.map((video)=>
      <Link key={video.id} to={'/watch?v='+video.id}>
      <Videocard  info={video}/></Link>)}

 
    

    </div>
  )
}

export default Videocontainer