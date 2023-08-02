import React from 'react'
import MenuHamburger from '../../components/MenuHamburger/MenuHamburger'
import Authentification from '../../components/Authentification/Authentification'
import AuthentificationHeader from '../../components/Authentification/AuthentificationHeader'

const Home = () => {
  return (
    <section className="my-6 flex justify-between items-center bg-red-200">
      <div className='flex items-center'>
        <MenuHamburger />
        <h1 className='text-3xl'>Uber Eats</h1>
      </div>
      <div className=''>
        <AuthentificationHeader />
      </div>
    </section>
  )
}

export default Home