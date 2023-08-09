import React from 'react'
import { Link } from 'react-router-dom'

const Lyon = () => {
  return (
    <div>
        <h1>Lyon</h1>
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
    </div>
  )
}

export default Lyon