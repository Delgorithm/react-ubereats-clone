import React from 'react'


const Map = () => {
  return (
    <div>
        <div className='flex justify-between mx-10'>
          <p className='text-4xl font-bold'>Villes à proximité</p>
          <a className="underline"href="#">Afficher toutes les villes (+ de 1)</a>
        </div>
        <div className=''>
          <picture className='flex justify-center my-6'>
            <img className="w-11/12"src="./img/map001.jpeg" alt="" />
          </picture>
          <div>
            {/* Should i use an API to make the map + the cities or could i just make some button cities that will be responsive ? */}
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