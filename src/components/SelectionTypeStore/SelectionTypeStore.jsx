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
    { id: 1, img:'./img/marketdisplay001.png', name: "McDonald's", delivery:'Frais de livraison', cost:'2.49€', time:'10-25 min', star: '4.0', icon:<FaCodeMerge /> },
    { id: 2, img:'./img/marketdisplay002.png', name: "KFC", delivery:'Frais de livraison', cost:'2.99€', time:'15-25 min', star: '3.2', icon:<FaCodeMerge /> },
    { id: 3, img:'./img/marketdisplay003.png', name: "Poké", delivery:'Frais de livraison', cost:'3.99€', time:'15-30 min', star: '3.7', icon:<FaCodeMerge /> },
  ]

  const contentByItemId = {
    1: {
      img:'./img/marketdisplay001.png',
      name: "McDonald's (Bordeaux Victoire)",
      iconStar: <FaStar />,
      star: "4.1 (200+ notes)",
      time: "10-25 min",
      delivery: "Frais de livraison",
      cost: "2.49€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    },
    2: {
      img:'./img/marketdisplay002.png',
      name: "KFC (St-Catherine)",
      iconStar: <FaStar />,
      star: "3.2 (200+ notes)",
      time: "15-25 min",
      delivery: "Frais de livraison",
      cost: "2.99€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    },
    3: {
      img:'./img/marketdisplay003.png',
      name: "Poké (St-Catherine)",
      iconStar: <FaStar />,
      star: "3.7 (200+ notes)",
      time: "15-30 min",
      delivery: "Frais de livraison",
      cost: "3.99€",
      information: "Appuyez pour consulter les horaires, les informations, etc.",
      iconRight: <FaAngleRight />,
    }
  }

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
                <div className='flex items-center gap-1'>
                  {item.icon}
                  <p>{item.delivery}</p> {/* <p>{item.delivery} + localisation with google map API */}
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
              <div className='fixed bg-white w-screen'>
                <button className='fixed top-[8%] left-[5%] p-2 bg-gray-200 rounded-full' onClick={() => setSelectedItem(null)}> <FaX /> </button>
                <button className='fixed top-[8%] right-[18%] p-2 bg-gray-200 rounded-full'> <FaSistrix/> </button>
                <button className='fixed top-[8%] right-[6%] p-2 bg-gray-200 rounded-full'> <FaEllipsis/> </button>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default SelectionTypeStore