import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BtnAuthentification from '../BtnAuthentification/BtnAuthentification';

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideclick = (event ) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideclick);

    return () => {
      window.removeEventListener('click', handleOutsideclick);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className='block'>
        <button
          className="w-8 h-8 flex flex-col gap-2 lg-gap-1 lg-mx-12 justify-center items-center"
          onClick={toggleMenu}
        >
          <span className={isOpen ? 'w-5 h-0.5 bg-black transform rotate-45 translate-y-1.5 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
          <span className={isOpen ? 'w-5 h-0.5 bg-black opacity-0 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
          <span className={isOpen ? 'w-5 h-0.5 bg-black -rotate-45 -translate-y-1.5 duration-500' : 'w-5 h-0.5 bg-black duration-500'}></span>
        </button>
      </div>
      {isOpen && (
        <nav className='absolute left-0 top-0 z-50'>
          <div className="w-80 h-screen flex flex-col justify-between bg-gray-100 fixed">
            <div className="flex flex-col my-4">
              <BtnAuthentification/>
              <ul>
                <li className='flex flex-col gap-2 m-6'>
                  <a href="#">Créez un compte professionnel</a>
                  <a href="#">Ajoutez voutre restaurant</a>
                  <a href="#">Devenez un coursier-partenaire</a>
                </li>
              </ul>
              <ul className='flex flex-col  items-center gap-4'>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/Bordeaux">Paris</Link>
                </li>
                <li>
                  <Link to="/Bordeaux">Lyon</Link>
                </li>
                <li>
                  <Link to="/Bordeaux">Bordeaux</Link>
                </li>
                <li>
                  <Link to="/Bordeaux">Toulouse</Link>
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
