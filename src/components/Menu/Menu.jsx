import React from 'react'
import Authentification from '../Authentification/Authentification'

const Menu = () => {
  return (
    <div>
        <nav>
            <div className="navBurger">
                <div className="first-part">
                    <Authentification />
                    <ul>
                        <li>
                            <a href="#">Créez un compte professionnel</a>
                            <a href="#">Ajoutez voutre restaurant</a>
                            <a href="#">Devenez un coursier-partneaire</a>
                        </li>
                    </ul>
                </div>
                <div className="second-part">
                    <div className="logo-info">
                        <picture>
                            <img src="../public/img/Uber Eats.svg" alt="UberEats' logo" width={100} height={100} />
                        </picture>
                        <p>
                            Plus de fonctionnalités dans l'application.
                        </p>
                    </div>
                    <div className="device-info">
                        <ul>
                            <li>
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