import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import './header.css'
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(searchTerm)
      if(searchTerm){
        navigate(`/search/${searchTerm}`)
      }
      setSearchTerm('')
  }
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <img src={logo} alt="logo" className='navbar-logo' />
      </Link>
      <div className='form-container'>

      <input type="text"  onChange={(e) => {setSearchTerm(e.target.value)}} value={searchTerm} className='searchBar' placeholder='Search'
      />
      <FiSearch onClick={handleSubmit} type='submit' className='search-icon' />
      </div>
    </nav>
  )
}

export default Header
