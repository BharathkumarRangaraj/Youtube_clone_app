import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {

  const [searchparams]=useSearchParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())

  })
  return (
    <div>
      <iframe width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/"+searchparams.get('v') }
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watchpage