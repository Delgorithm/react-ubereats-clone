import React from 'react'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const FooterMobile = () => {
  return (
    <div className='flex justify-around items-center fixed w-screen bg-white bottom-0 h-20'>
        <Link to="/Bordeaux">
            <div className='flex flex-col items-center'>
                <FaHouseChimney className='w-16 h-6' />
                <p>Accueil</p>
            </div>
        </Link>
        <Link to="/Browse">
            <div className='flex flex-col items-center'>
                <FaSistrix className='w-16 h-6'  />
                <p>Parcourir</p>
            </div>
        </Link>
        <Link to="/Cart">
            <div className='flex flex-col items-center'>
                <FaCartShopping className='w-16 h-6'  />
                <p>Paniers</p>
            </div>
        </Link>
        <Link to="/Profil">
            <div className='flex flex-col items-center'>
                <FaUser className='w-16 h-6'  />
                <p>Compte</p>
            </div>
        </Link>
    </div>
  )
}

export default FooterMobile