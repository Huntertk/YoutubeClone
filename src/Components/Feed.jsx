import React, {useEffect, useState} from 'react'
import './feed.css'
import { AiFillHome } from "react-icons/ai";
import { BsFilm,BsNewspaper,BsMusicNoteBeamed,BsFire } from "react-icons/bs";
import { fetchDataFromApi } from '../../fetchDataFromApi';
import Videos from './Videos';



const Feed = () => {
  const buttonData = [
    {
      name:'New',
      icon: <AiFillHome />
    },
    {
      name:'Trending',
      icon: <BsFire />
    },
    {
      name:'Movies',
      icon: <BsFilm/>
    },
    {
      name:'News',
      icon: <BsNewspaper />
    },
    {
      name:'Songs',
      icon: <BsMusicNoteBeamed />
    },
  ]
  const [category, setCategory] = useState('Songs')
  const [videos, setVideos] = useState([])
console.log(category)
  useEffect(() => {
    fetchDataFromApi(`search?part=snippet&q=${category}`)
    .then(data => setVideos(data.items))
  },[category])
  const activeStyle = {
    background: '#fc1503',
    color: '#f5f5f5'
  }

  return (
    <section className='feed-container'>
      <div className="button-container">
        {buttonData.map((button, index) => {
          return  <button onClick={() => {setCategory(button.name)}} key={index} className='btn-feed'style={category === button.name ? activeStyle : null} >{button.icon}{button.name}</button>
        })}
      </div>
      <h3 className='video-container-heading'><span>{category}</span> Videos</h3>
      <Videos videos={videos} />
    </section>
  )
}

export default Feed
