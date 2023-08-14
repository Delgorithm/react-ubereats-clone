import React from 'react'
import { FaCodeMerge } from 'react-icons/fa6'

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
              className='  rounded-full border'
            />
          </button>
        ))}
      </div>
      <div className='m-2 flex flex-col justify-center items-center'>
        {marketsDisplay.map((item) => (
          <button 
            key={item.id} 
            className='m-2'
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
      </div>
    </div>
  )
}

export default SelectionTypeStore