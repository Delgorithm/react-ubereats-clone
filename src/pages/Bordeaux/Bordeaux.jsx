import React from 'react'
import Menu from '../../components/MenuHamburger/MenuHamburger'
import { Link } from 'react-router-dom'
import FooterMobile from '../../components/Footer/FooterMobile'
import SearchBarMobile from '../../components/Searching/SearchBarMobile'

const Bordeaux = () => {
  return (
    <div>
        <h1>Bordeaux</h1>
        <Menu />
        <div>
        <h1>UberEats</h1>
        <ul className='flex gap-4'>
          <li>
            <Link to="/Paris">Paris</Link>
          </li>
          <li>
            <Link to="/Lyon">Lyon</Link>
          </li>
          <li>
            <Link to="/Bordeaux">Bordeaux</Link>
          </li>
          <li>
            <Link to="/Toulouse">Toulouse</Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>
        <SearchBarMobile />
        <FooterMobile />
        </div>
    </div>
  )
}

export default Bordeaux