import React from 'react';

import Authentification from '../Authentification/Authentification';

const Menu = () => {
  return (
    <div>
        <ul className='cursor-pointer'>
            <li className='flex flex-col gap-1 pl-10 w-0'>
                <span className='w-5 h-0.5 bg-black'></span>
                <span className='w-5 h-0.5 bg-black'></span>
                <span className='w-5 h-0.5 bg-black'></span>
            </li>
        </ul>
        {/* <input type="checkbox" name="hamburger" id="hamburger" /> */}
        <nav>
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
    </div>
  )
}

export default Menu