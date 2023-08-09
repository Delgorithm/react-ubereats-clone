import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Map = () => {
  return (
    <div className='mx-10'>
        <div className='flex justify-between items-baseline'>
          <p className='text-4xl font-bold'>Villes à proximité</p>
          <a className="underline"href="#">Afficher toutes les villes (+ de 1)</a>
        </div>
        <div className='relative xsm:hidden md:block'>
          <picture className='flex justify-center'>
            <img className="py-4"src="./img/map001.jpeg" alt="France's map"/>
            <div>
              <Link to="/Paris">
                <button className='flex gap-2 items-center  absolute top-[25%] left-[47%] p-2 bg-white rounded-full hover:scale-125'>
                    <FaLocationDot/> Paris
                </button>
              </Link>
              <Link to="/Lyon">
                <button className=' flex gap-2 items-center  absolute top-[60%] left-[56%] p-2 bg-white rounded-full hover:scale-125'>
                    <FaLocationDot/> Lyon
                </button>
              </Link>
              <Link to="/Bordeaux">
                <button className=' flex gap-2 items-center  absolute top-[70%] left-[36.5%] p-2 bg-white rounded-full hover:scale-125'>
                    <FaLocationDot/> Bordeaux
                </button>
              </Link>
              <Link to="/Toulouse">
                <button className=' flex gap-2 items-center  absolute top-[83%] left-[44%] p-2 bg-white rounded-full hover:scale-125'>
                    <FaLocationDot/> Toulouse
                </button>            
              </Link>
            </div>
          </picture>
        </div>
        <div>
          <ul className='flex justify-between py-4'>
            <li>
              <Link to="/Paris">Paris</Link>
            </li>
            <li>
              <Link to="/Lyon">Lyon</Link>
            </li>
            <li>
              <Link to="/Bordeaux">Bordeaux</Link>
            </li>
            <li>
              <Link to="/Toulouse">Toulouse</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Map