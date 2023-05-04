import React, { useEffect } from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import Aos from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'

import './videos.css'

const Videos = (props) => {
    useEffect(() => {
        Aos.init()
    },[])
    console.log(props.videos)
  return (
    <div className='videos-main-container'>
      {props.videos.map((video,index) => {
          return <div key={index} className="video-container"
        data-aos="zoom-in-up"
        >
            <Link to={`/videos/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.high.url} alt="" className='video-img' />
            </Link>
        <h3>{video.snippet.title}</h3>
        <div className="channel-details">
            <span>{video.snippet.channelTitle}</span> 
            <BsCheckCircleFill />
        </div>
      </div>
      })}
    </div>
  )
}

export default Videos
