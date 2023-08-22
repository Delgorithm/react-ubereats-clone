import React from 'react'
import { Link } from 'react-router-dom'

const BtnAuthentification = (props) => {
    return (
    <div className='flex flex-col gap-2 items-center'>
      <Link to="/AuthRegister">
        <button className={`bg-black text-white p-4 w-64 rounded-lg hover:bg-opacity-50 ${props.className}`}>Inscription</button>
      </Link>
      <Link to="/AuthLogin">
        <button className={`bg-gray-300 p-4 w-64 rounded-lg hover:bg-opacity-75 ${props.className}`}>Connexion</button>
      </Link>
    </div>
    );
}

export default BtnAuthentification