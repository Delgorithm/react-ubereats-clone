import React from 'react'

const Toulouse = () => {
  return (
    <div>
        <h1>Toulouse</h1>
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

export default Toulouse