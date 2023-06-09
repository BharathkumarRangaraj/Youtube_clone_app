import React from 'react'

const Videocard = ({info}) => {
    

    const{snippet,statistics}=info;
    const {channelTitle,thumbnails}=snippet;
    


  return (
    <div className='m-2 p-2 shadow-lg border border-gray-200 w-72'>
        <img alt='thumbnails
' src={thumbnails.medium.url}/>
<h1 className='font-bold'>{snippet.localized.title}</h1>
        <h1>{channelTitle}</h1>
        <h1>{statistics.viewCount} views</h1>
    </div>
  )
}

export default Videocard;