import React from 'react'

const AuthentificationHeader = () => {
  return (
    <div className='flex sticky'>
        <button className='bg-gray-100 mx-5 p-3 rounded-full hover:bg-gray-300'>Connexion</button>
        <button className='bg-black text-white mx-2 p-3 rounded-full hover:bg-opacity-50'>Inscription</button>
    </div>
  )
}

export default AuthentificationHeader

