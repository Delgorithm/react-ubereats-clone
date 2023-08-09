import React from 'react'
import { FaSistrix } from 'react-icons/fa6'
import { FaGrip } from 'react-icons/fa6'


const SearchBarMobile = () => {
  return (
    <div className='flex justify-center'>
        <form
            className='flex relative' 
            action="">
            <button
                className='absolute top-[30%] left-[10%] '
            >
                <FaSistrix className='h-6 w-6'/>
            </button>
            <input 
                className='flex border p-3 w-[350px] m-2 pl-16'
                placeholder="Rechercher dans l'aide Uber Eats"
                type="text" 
            />
            <button
                className='absolute top-[30%] right-[5%] '
            >
                <FaGrip className='h-6 w-6'/>
            </button>
        </form>

    </div>
  )
}

export default SearchBarMobile