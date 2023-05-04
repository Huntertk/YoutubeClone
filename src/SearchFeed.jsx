import React, {useEffect, useState} from 'react'
import Videos from './Components/Videos'
import { fetchDataFromApi } from '../fetchDataFromApi'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
    const params = useParams()
    const  [videos, setVideos] = useState([])

    useEffect(() => {
        fetchDataFromApi(`search?part=snippet&q=${params.searchTerm}`)
        .then(data => setVideos(data.items))
    },[params.searchTerm])

  return (
    <div>
      <Videos videos={videos} />
    </div>
  )
}

export default SearchFeed
