import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Layout from './Components/Layout'
import Feed from './Components/Feed'
import './App.css'
import VideoDetails from './VideoDetails'
import SearchFeed from './SearchFeed'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Feed />} />
          <Route path='/videos/:id' element={<VideoDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
