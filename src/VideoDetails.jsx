import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom'
import './videosdetail.css'
const VideoDetails = () => {
    const params = useParams()
    console.log(params)
  return (
    <div className='video-details-container'>
     <ReactPlayer url={`https://www.youtube.com/watch?v=${params.id}`} className='react-player' controls/>
    </div>
  )
}

export default VideoDetails
