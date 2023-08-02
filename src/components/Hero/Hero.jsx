import React from 'react'
import Searching from '../../components/Searching/Searching'
import Dropdown from '../../components/Dropdown/Dropdown'
import Nav from '../../components/Nav/Nav'

const Hero = () => {
  return (
    <section 
      className='w-full h-full bg-cover bg-center' 
      style={{ backgroundImage: `url('./img/bg003.jpg')`}}
    >
      <Nav />
      <div className='h-screen grid content-center mx-10'>
        <div>
          <h1 className='text-6xl max-w-4xl fw-20 font-semibold text-white'>Vos plats préférés, directement à votre porte</h1>
        </div>
        <div className='flex gap-4 my-2'>
          <Searching />
          <Dropdown />
          <button
            className='bg-black text-white px-4 mx-4 rounded hover:opacity-80 cursor-pointer active:translate-y-1'
          >
            Trouver un restaurant
          </button>
        </div>
        <div className='flex gap-1 text-white'>
          <a className="underline" href="#">Connexion</a>
          <p>pour afficher vos adresses récentes</p>
        </div>
      </div>
    </section>
  );
};

export default Hero