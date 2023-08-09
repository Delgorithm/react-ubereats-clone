import React from 'react'
import { Link } from 'react-router-dom'

const AuthentificationHeader = (props) => {
  return (
    <Link to="/auth">
        <div className='flex sticky'>
        <button className={`bg-gray-100 mx-5 p-3 rounded-full hover:bg-gray-300 ${props.className}`}>Connexion</button>
        <button className={`bg-black text-white mx-2 p-3 rounded-full hover:bg-opacity-50 ${props.className}`}>Inscription</button>
      </div>
    </Link>
  )
}

export default AuthentificationHeader

