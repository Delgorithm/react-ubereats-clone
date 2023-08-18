import React from 'react'
import { useState } from 'react';
import { FaCodeMerge } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaEllipsis } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'

function SelectionTypeStore(props) {
  const markets = [
    { id: 1, img:'./img/carrefour-3.svg', name:'Carrefour'},
    { id: 2, img:'./img/super-u-1.svg', name:'Super U'},
    { id: 3, img:'./img/lidl-logo-1.svg', name:'Lidl'},
    { id: 4, img:'./img/bio-1.svg', name:'Bio'},
    { id: 5, img:'./img/picard.svg', name:'Picard'},
  ];

  const marketsDisplay = [
    { id: 1, img:'./img/marketdisplay001.png', name: "McDonald's", delivery:'Frais de livraison', cost:2.49 + '€', time:'10-25 min', star: '4.0', icon:<FaCodeMerge /> },
    { id: 2, img:'./img/marketdisplay002.png', name: "KFC", delivery:'Frais de livraison', cost: 2.99 + '€', time:'15-25 min', star: '3.2', icon:<FaCodeMerge /> },
    { id: 3, img:'./img/marketdisplay003.png', name: "Poké", delivery:'Frais de livraison', cost: 3.99 + '€', time:'15-30 min', star: '3.7', icon:<FaCodeMerge /> },
  ]

  const contentByItemId = {
    1:{
      img:'./img/marketdisplay001.png',
      name: "McDonald's (Bordeaux Victoire)",
      iconStar: <FaStar />,
      star: "4.1 (200+ notes)",
      time: "10-25 min",
      delivery: "Frais de livraison",
      cost: 2.49 + "€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    },
    2:{
      img:'./img/marketdisplay002.png',
      name: "KFC (St-Catherine)",
      iconStar: <FaStar />,
      star: "3.2 (200+ notes)",
      time: "15-25 min",
      delivery: "Frais de livraison",
      cost: 2.99 +"€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    },
    3:{
      img:'./img/marketdisplay003.png',
      name: "Poké (St-Catherine)",
      iconStar: <FaStar />,
      star: "3.7 (200+ notes)",
      time: "15-30 min",
      delivery: "Frais de livraison",
      cost: 3.99 + "€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    }
  }

  const mcdoItems = [
    {
      id: 1,
      img: './img/mcdoproduct001.jpg',
      name: "P'TIT BOEUF DELUXE",
      price: 10.00 + '€',
      information: "Pain spécial, steak haché, fromage fondu, salade, oignons, sauce."
    },
    {
      id: 2,
      img: './img/mcdoproduct002.jpg',
      name: "BIG TASTY",
      price: 13.90 + '€',
      information: "Pain spécial, steack haché, salade, oignon, emmental fondu, tomate, sauce.",
    },
    {
      id: 3,
      img: './img/mcdoproduct003.jpg',
      name: "BIG MAC",
      price: 13.35 + '€',
      information: "Pain spécial, steacks hachés, salade, oignon, cornichon, fromage fondu, sauce.",
    },
    {
      id: 4,
      img: './img/mcdoproduct004.jpg',
      name: "EGG CHESSE",
      price: 14.95 + '€',
      information: "Pain McMuffin, 1 oeuf fraîchement craqué, 1 tranche de cheddar",
    },
    {
      id: 5,
      img: './img/mcdoproduct005.jpg',
      name: "MC CHEVRE",
      price: 12.90 + '€',
      information: "Galette de blé, spécialité pannée à base de fromage de chèvre, batavia, rondelles de tomates, oignons préparés et frits, sauce.",
    },
    {
      id: 6,
      img: './img/mcdoproduct006.jpg',
      name: "MC CRISPY",
      price: 14.90 + '€',
      information: "Pain spécial, filet de poulet mariné, pané et frit, salade, sauce.",
    },  
  ]

  const kfcItems = [
    {
      id: 1,
      img: './img/Menu_10.jpg',
      name: 'Menu 10 Tenders',
      price:  10 + '€',
      information: 'Un menu Bucket généreux pour vous régaler façon KFC ! 10 Tenders®, des morceaux de poulet marinés et panés… tendre dedans et croustillants dehors ! + 3 sauces.',
    },
    {
      id: 2,
      img: './img/Menu_16.jpg',
      name: 'Menu 16 Tenders',
      price:  16 + '€',
      information: 'Un menu Bucket généreux pour vous régaler façon KFC ! 16 Tenders®, des morceaux de poulet marinés et panés… tendre dedans et croustillants dehors ! + 3 sauces.',
    },
    {
      id: 3,
      img: './img/Menu_32.jpg',
      name: 'Menu 32 Tenders',
      price:  32 + '€',
      information: 'Un menu Bucket généreux pour vous régaler façon KFC ! 32 Tenders®, des morceaux de poulet marinés et panés… tendre dedans et croustillants dehors ! + 3 sauces.',
    },
    {
      id: 4,
      img: './img/Menu_50.jpg',
      name: 'Menu 50 Tenders',
      price:  99.90 + '€',
      information: 'Un menu Bucket généreux pour vous régaler façon KFC ! 50 Tenders®, des morceaux de poulet marinés et panés… tendre dedans et croustillants dehors ! + 3 sauces.',
    },
  ]

  const pokeItems = [
    {
      id: 1,
      img: './img/poke.jpg',
      name: 'Beef Loc Lac',
      price: 299.99 + '€',
      information: 'Émincé de boeuf caramélisé et sauté au wok, riz blanc sauté à la tomate, salade, tomates, concombres et oignons rouges et ciboulette thaï.'
    }
  ]
  

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='pb-20'>
      <div className='flex items-center justify-around gap-5 p-5 w-screen'>
        {markets.map((item) => (
          <button
            key={item.id} 
            className='w-20'
          >
            <img 
              src={item.img} 
              alt={item.name} 
              className='rounded-full border'
            />
          </button>
        ))}
      </div>
      <div className='m-2 flex flex-col justify-center items-center'>
        {marketsDisplay.map((item) => (
          <button 
            key={item.id} 
            className='m-2'
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.img} className='rounded-3xl w-[400px] h-[200px]' />
            <div className='flex items-center justify-between '>
              <div className='flex flex-col '>
                <p className='flex justify-start'>{item.name}</p>
                <div className='flex items-center gap-2'>
                  {item.icon}
                  <p className='font-light text-sm'>{item.delivery}</p>{/* <p>{item.delivery} + localisation with google map API */}
                  <p className='font-light text-sm'>{item.cost}</p>
                  <p className='font-light text-sm'>{item.time}</p> 
                </div>
              </div>
              <div>
                <p className='p-1 rounded-full bg-gray-200'>{item.star}</p>
              </div>
            </div>
          </button>
        ))}

        {selectedItem && (
          <div className='fixed top-2 left-0 w-screen h-screen flex justify-center items-center'>
            <div className='bg-white p-4 rounded-lg overflow-y-auto h-[700px] w-screen pb-32'>
              <div className='fixed p-4 w-screen'>
                <div className='flex justify-between items-center'>
                  <button className='p-2 bg-gray-200 rounded-full' onClick={() => setSelectedItem(null)}> <FaX /> </button>
                  <div className='flex gap-6'>
                    <button className='p-2 bg-gray-200 rounded-full'> <FaSistrix/> </button>
                    <button className='p-2 mx-6 bg-gray-200 rounded-full'> <FaEllipsis/> </button>
                  </div>
                </div>
              </div>
              <picture>
                <img className="" src={contentByItemId[selectedItem.id].img} alt="" width={screen} height={screen}/>
              </picture>
              <p className='text-2xl'>{contentByItemId[selectedItem.id].name}</p>
              <div className='flex items-center gap-1 font-light'>
                <p className=''>{contentByItemId[selectedItem.id].iconStar}</p>
                <p className=''>{contentByItemId[selectedItem.id].star}</p>
              </div>
              <div className='flex gap-2 font-light'>
                <p className=''>{contentByItemId[selectedItem.id].time}</p>
                <p className=''>{contentByItemId[selectedItem.id].delivery}</p>
                <p className=''>{contentByItemId[selectedItem.id].cost}</p>
              </div>
              <div className='flex items-center justify-between font-light'>
                <p className=''>{contentByItemId[selectedItem.id].information}</p>
                <p className=''>{contentByItemId[selectedItem.id].iconRight}</p>
              </div>
              <p className='text-2xl my-4'>Les plus populaires</p>
              <div>
                {selectedItem.id === 1 && 
                  mcdoItems.map((step, index) => (
                    <div key={step.id} className='flex items-center'>
                      <div className='m-4'>
                        <p key={step.id} >{step.name}</p>
                        <p key={step.id} className='font-light'>{step.price}</p>
                        <p key={step.id} className='font-thin'>{step.information}</p>
                      </div>
                      <picture>
                        <img key={step.id} src={step.img} alt="" width={300}/>
                      </picture>
                    </div>
                  ))}
              </div>
              <div>
                {selectedItem.id === 2 && 
                  kfcItems.map((step, index) => (
                    <div key={step.id} className='flex items-center'>
                      <div className='m-4'>
                        <p key={step.id} >{step.name}</p>
                        <p key={step.id} className='font-light'>{step.price}</p>
                        <p key={step.id} className='font-thin'>{step.information}</p>
                      </div>
                      <picture>
                        <img key={step.id} src={step.img} alt="" width={1000}/>
                      </picture>
                    </div>
                  ))}
              </div>
              <div>
                {selectedItem.id === 3 && 
                  pokeItems.map((step, index) => (
                    <div key={step.id} className='flex items-center'>
                    <div className='m-4'>
                      <p key={step.id} >{step.name}</p>
                      <p key={step.id} className='font-light'>{step.price}</p>
                      <p key={step.id} className='font-thin'>{step.information}</p>
                    </div>
                    <picture>
                      <img key={step.id} src={step.img} alt="" width={1000}/>
                    </picture>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectionTypeStore