import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6"
import { FaArrowsRotate } from "react-icons/fa6"
import { FaReceipt } from "react-icons/fa6"
import { FaBagShopping } from "react-icons/fa6"
import FooterMobile from '../../components/Footer/FooterMobile'



const Orders = () => {
  return (
    <div className='m-4'>
      <div className='flex items-center justify-between'>
        <Link to="/Cart">
          <FaArrowLeftLong className='w-6 h-6' />
        </Link>
        <p>Commandes</p>
        <span></span>
      </div>
      <div className='flex items-center justify-around p-5 pb-20'>
        <p className='flex items-center gap-2'><FaArrowsRotate />Comm...nouveau</p>
        <p className='flex items-center gap-2'><FaReceipt />Toutes l...mandes</p>
      </div>
      <div className='flex flex-col items-center justify-center m-4 p'>
        <FaBagShopping className='w-20 h-20'/>
        <p className='font-semibold p-4'>Aucune commande pour le moment</p>
        <p className='font-light text-center pb-6'>Vous pouvez consulter l'historique de vos commandes et commander à nouveau vos plats préférés ici.</p>
        <Link to="/Bordeaux">
          <button className='bg-black text-white p-2 rounded-full active:opacity-70'>Commander</button>
        </Link>
      </div>
      <FooterMobile />
    </div>
  )
}

export default Orders