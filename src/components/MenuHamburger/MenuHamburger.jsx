import React, { useState } from 'react';
import Authentification from '../Authentification/Authentification';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='block'>
        <button
          className="w-8 h-8 flex flex-col gap-1 mx-12 justify-center items-center"
          onClick={toggleMenu}
        >
          <span className={isOpen ? 'w-5 h-0.5 bg-black transform rotate-45 translate-y-1.5 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
          <span className={isOpen ? 'w-5 h-0.5 bg-black opacity-0 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
          <span className={isOpen ? 'w-5 h-0.5 bg-black -rotate-45 -translate-y-1.5 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
        </button>
      </div>
      {isOpen && (
        <nav className='absolute'>
          <div className="w-80 max-w-80 min-h-screen flex flex-col justify-between bg-gray-500">
            <div className="flex flex-col">
              <Authentification />
              <ul>
                <li className='flex flex-col gap-2 m-6'>
                  <a href="#">Créez un compte professionnel</a>
                  <a href="#">Ajoutez voutre restaurant</a>
                  <a href="#">Devenez un coursier-partneaire</a>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="flex items-center mb-4">
                <picture>
                  <img src="/img/Uber Eats.svg" alt="UberEats' logo" width={180} height={180} />
                </picture>
                <p>
                  Plus de fonctionnalités dans l'application.
                </p>
              </div>
              <div>
                <ul>
                  <li className='flex justify-around'>
                    <a href="#">iPhone</a>
                    <a href="#">Android</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default MenuHamburger;
