import React from 'react'
import Searching from '../../components/Searching/Searching'
import Dropdown from '../../components/Dropdown/Dropdown'
import Nav from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero.jsx'
import Blog from '../../components/Blog/Blog'
import Map from '../../components/Map/Map'

const Home = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Map />
    </div>
  )
}

export default Home