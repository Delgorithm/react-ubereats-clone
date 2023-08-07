import React from 'react'
import MenuHamburger from '../MenuHamburger/MenuHamburger'
import AuthentificationHeader from '../Authentification/AuthentificationHeader'
import Searching from '../Searching/Searching'

const Nav = () => {
  return (
      <div className="flex justify-between items-center p-5 fixed top-0 w-[100vw]">
        <div className='flex items-center xsm:w-screen xsm:justify-between md:justify-start md:gap-5'>
          <MenuHamburger />
          <h1 className='text-xl lg:text-2xl'>Uber Eats</h1>
        </div>
        <div>
          <Searching className="xsm:hidden lg:block" />
        </div>
        <div className=''>
          <AuthentificationHeader className="xsm:hidden lg:block"/>
        </div>
      </div>
  )
}

export default Nav