import React from 'react'
import Hero from '../../components/Hero/Hero.jsx'
import Blog from '../../components/Blog/Blog'
import Map from '../../components/Map/Map'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Map />
      <Footer />
    </div>
  )
}

export default Home