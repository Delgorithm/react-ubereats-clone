import React from 'react'
import MenuHamburger from '../MenuHamburger/MenuHamburger'
import AuthentificationHeader from '../Authentification/AuthentificationHeader'
import Searching from '../Searching/Searching'

const Nav = () => {
  return (
      <div className="flex justify-between items-center px-4 py-4 fixed top-0 w-[100vw]">
        <div className='flex items-center'>
          <MenuHamburger />
          <h1 className='text-3xl'>Uber Eats</h1>
        </div>
        <div>
          <Searching />
        </div>
        <div className=''>
          <AuthentificationHeader />
        </div>
      </div>
  )
}

export default Nav