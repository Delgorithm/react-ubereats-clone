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
      <div className='h-screen grid content-center mx-4'>
        <div>
          <h1 className='text-2xl w-[300px] md:text-6xl md:w-[700px] fw-20 font-semibold text-white'>Vos plats préférés, directement à votre porte</h1>
        </div>
        <div className='flex xsm:flex-col md:flex-row gap-4 my-2'>
          <Searching className="xsm:w-3/4 md:w-[260px] lg:w-[400px]" />
          <Dropdown />
          <button
            className='xsm:p-3 xsm:w-52 bg-black text-white rounded hover:opacity-80 cursor-pointer active:translate-y-1'
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