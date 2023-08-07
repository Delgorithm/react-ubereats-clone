import React from 'react'

const Authentification = (props) => {
  return (
    <div className='flex flex-col'>
        <button className={`bg-black text-white mx-5 m-3 py-4 rounded-lg hover:bg-opacity-50 ${props.className}`}>Inscription</button>
        <button className={`bg-gray-300 mx-5 p-4 rounded-lg hover:bg-opacity-75 ${props.className}`}>Connexion</button>
    </div>
  )
}

export default Authentification