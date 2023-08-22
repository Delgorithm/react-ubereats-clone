import React from 'react'
import { Link } from 'react-router-dom'

const BtnAuthentificationHeader = (props) => {
  return (
      <div className='flex sticky'>
        <Link to="/AuthLogin">
          <button className={`bg-gray-100 mx-5 p-3 rounded-full hover:bg-gray-300 ${props.className}`}>Connexion</button>
        </Link>
        <Link to="/AuthRegister">
          <button className={`bg-black text-white mx-2 p-3 rounded-full hover:bg-opacity-50 ${props.className}`}>Inscription</button>
        </Link>
      </div>
  )
}

export default BtnAuthentificationHeader