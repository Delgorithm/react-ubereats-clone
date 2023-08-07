import React from 'react'
import { FaLanguage } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div>
        <div className='m-10 flex xsm:flex-col md:flex-row justify-between'>
            <div className='flex flex-col justify-between'>
                <p className='text-3xl'>Uber <span className='font-bold'>Eats</span></p>
                <picture className='xsm:hidden md:block'>
                    <img src="./img/applestore.svg" alt="" />
                </picture>
            </div>
            <div className='flex gap-6 xsm:my-4 md:my-0'>
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
        <div>
            <div className='m-10 flex gap-10'>
                <div className='flex xsm:flex-col xsm:justify-around'>
                    <a href="#">
                        <FaFacebook className='w-10 h-6'/>
                    </a>
                    <a href="#">
                        <FaTwitter className='w-10 h-6'/>
                    </a>
                    <a href="#">
                        <FaInstagram className='w-10 h-6'/>
                    </a>
                </div>
                <div className='xsm:flex xsm:flex-col xsm:gap-4 md:flex-row md:gap-10 md:justify-between'>
                    {getBottomFooter().map((step, index) => (
                        <div key={index}>
                            <a href=''>{step.content}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex gap-10 justify-between m-10 '>
                    <p>Ce site est protégé par reCAPTCHA. Par ailleurs, la <a href="#">Politique de confidentialité</a>
                    et les <a href="#">Conditions d'utilisation</a> de Google s'appliquent.</p>
                    <p>© 2023 Uber Technologies Inc.</p>
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

const getBottomFooter = () => [
    {
        content: 'Fonctionnement des sites et des applications Uber et Uber Eats',
    },
    {
        content: 'Politique de confidentialité',
    },
    {
        content: 'Conditions',
    },
    {
        content: 'Tarifs',
    },
    {
        content: 'Ne vendez pas et ne partagez pas mes informations personnelles',
    },
]

export default Footer