import React from 'react'
// import { FaLocationDot } from 'react-icons/fa';

const Map = () => {
  return (
    <div>
        <div className='flex justify-between mx-10'>
          <p className='text-4xl font-bold'>Villes à proximité</p>
          <a href="#">Afficher toutes les villes (+ de 1)</a>
        </div>
        <div className=''>
          <picture className='flex justify-center my-6'>
            <img className="w-11/12"src="./img/map001.jpeg" alt="" />
          </picture>
          <div>
            {/* <p className='bg-red-400'>Testazedadadada <FaLocationDot/></p> */}
          </div>
        </div>
    </div>
  )
}

const getCity = () => [
  {
    city: "Bordeaux"
  },
  {
    city: "Paris"
  },
  {
    city: "Lyon"
  },
  {
    city: "Toulouse"
  }
]


export default Map