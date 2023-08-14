import React from 'react'
import { FaHouseChimney } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'


const FooterMobile = () => {
  return (
    <div className='flex justify-around items-center fixed w-screen bg-white bottom-0 h-20'>
        <div className='flex flex-col items-center'>
            <FaHouseChimney className='w-16 h-6' />
            <p>Accueil</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaSistrix className='w-16 h-6'  />
            <p>Parcourir</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaCartShopping className='w-16 h-6'  />
            <p>Paniers</p>
        </div>
        <div className='flex flex-col items-center'>
            <FaUser className='w-16 h-6'  />
            <p>Compte</p>
        </div>
    </div>
  )
}

export default FooterMobile