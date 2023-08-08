import React from 'react'
import Menu from '../../components/MenuHamburger/MenuHamburger'

const Bordeaux = () => {
  return (
    <div>
        <h1>Bordeaux</h1>
        <Menu />
        <div>
        <h1>UberEats</h1>
        <ul>
          <li className='flex gap-4'>
            <a href="./Bordeaux">Bordeaux</a>
            <a href="./Paris">Paris</a>
            <a href="./Lyon">Lyon</a>
            <a href="./Toulouse">Toulouse</a>
            <a href="/">Accueil</a>
          </li>
        </ul>
    </div>
    </div>
  )
}

export default Bordeaux