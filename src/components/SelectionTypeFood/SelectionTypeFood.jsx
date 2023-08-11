import React from 'react'
import { FaBowlFood } from 'react-icons/fa6'
import { FaGlassWater } from 'react-icons/fa6'
import { FaBasketShopping } from 'react-icons/fa6'
import { FaEllipsis } from 'react-icons/fa6'


const SelectionTypeFood = () => {
  return (
    <div>
        <button className='flex w-screen justify-around'>
            {getTypeFood().map((step, index) => (
                <div>
                    <div 
                        className='flex flex-col justify-around items-center p-7 m-2 border h-16 rounded-2xl bg-gray-100'
                        key={index}
                    >
                        <p>{step.logo}</p>
                    </div>
                    <div
                        className='text-xs' 
                        key={index}>
                        <p>{step.title}</p>
                    </div>
                </div>
            ))}
        </button>
    </div>
  )
}


const getTypeFood = () => [
    {
        logo: <FaBowlFood className='w-6 h-6'/>,
        title:"Restaurants"
    },
    {
        logo: <FaGlassWater className='w-6 h-6' />,
        title:"Courses"
    },
    {
        logo: <FaBasketShopping className='w-6 h-6' />,
        title:"Le Marché"
    },
    {
        logo: <FaEllipsis className='w-6 h-6' />,
        title:"Tout afficher"
    },
]


export default SelectionTypeFood