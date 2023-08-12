import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { FaPersonRunning } from 'react-icons/fa6'
import { FaBasketShopping } from 'react-icons/fa6'

const NavCity = () => {
  return (
    <div>
        <button className='flex flex-col m-3'>
            <p className='font-light'>Livrer maint.</p>
            <div className='flex items-center gap-2'>
                <p className='font-medium'>Gare Bordeaux-St-Jean</p>
                <FaChevronDown />
            </div>
        </button>
    </div>
  )
}

export default NavCity