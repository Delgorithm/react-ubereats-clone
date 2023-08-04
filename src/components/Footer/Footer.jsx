import React from 'react'
import { FaLanguage } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='m-10 flex justify-between'>
        <div className='flex flex-col justify-between'>
            <p className='text-3xl'>Uber <span className='font-bold'>Eats</span></p>
            <picture>
                <img src="./img/applestore.svg" alt="" />
            </picture>
        </div>
        <div className='flex gap-6'>
            <div className='flex flex-col gap-4'>
                {getLeftFooter().map((step, index) => (
                    <div key={index}>
                        <ul>
                            <li>
                                <a href="">{step.title}</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-4'>
                {getRightFooter().map((step, index) => (
                    <div key={index}>
                        <ul>
                            <li>
                                {step.title === "Français" ? (
                                    <>
                                        <a className='flex items-center gap-2' href=""><FaLanguage/>{step.title}</a>
                                    </>
                                ) : (
                                    <a href="">{step.title}</a>
                                )}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

const getLeftFooter = () => [
    {
        title: "Obtenir de l'aide"
    },
    {
        title:"Ajoutez votre restaurant"
    },
    {
        title:"Devenez coursier-partenaire"
    },
    {
        title:"Créez un compte professionnel"
    },
    {
        title:"Promotions"
    }
]

const getRightFooter = () => [
    {
        title:"Restaurants à proximité"
    },
    {
        title:"Commandes à récupérer à proximité"
    },
    {
        title:"À propos d'Uber Eats"
    },
    {
        title:"Français"
    }
]

export default Footer