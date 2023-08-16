import React from 'react'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaTarp } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import FooterMobile from '../../components/Footer/FooterMobile'



function Profil(){
  const info = [
    { id: 1, name: "Nom utilisateur"},
    { id: 2, img: "./img/ppa.jpg"}
  ]

  const mainSelection = [
    { id: 1, name: "Favoris", icon: <FaHeartCirclePlus /> },
    { id: 3, name: "Wallet", icon: <FaWallet /> },
    { id: 2, name: "Commandes", icon: <FaBagShopping /> },
  ]

  const mainSettings = [
    { id: 1, name: "Envoi de cadeau", icon: <FaGift /> },
    { id: 2, name: "Promotions", icon: <FaTarp /> },
    { id: 3, name: "Aide", icon: <FaHandshakeAngle /> },
    { id: 4, name: "Inviter des amis", icon: <FaPeopleRobbery/> },
    { id: 5, name: "Confidentialité", icon: <FaFileContract/> },
    { id: 6, name: "À propos", icon: <FaNewspaper /> },
  ]

  return(
    <div className='pb-24'>
      <div>
        <div className='flex justify-around'>
          {info.map((item) => (
            <div key={item.id} className='flex items-center m-2'>
              <p className='text-3xl'>{item.name}</p>
              <img src={item.img} alt="" className='w-20 rounded-full' />
            </div>
          ))}
        </div>
        <div className='flex justify-around'>
          {mainSelection.map((item) => (
            <div key={item.id}  className='flex flex-col items-center justify-around w-screen p-5 m-2 my-10 active:opacity-70 bg-gray-100 rounded-md'>
              <p>{item.name}</p>
              {item.icon}
            </div>
          ))}
        </div>
        <div className='p-2 flex flex-col gap-6'>
          {mainSettings.map((item => (
            <div key={item.id}  className='flex items-center gap-4 p-4 active:bg-gray-100'>
              {item.icon}
              <p>{item.name}</p>
            </div>
          )))}
        </div>
      </div>
      <FooterMobile />
    </div>
  )
}

export default Profil