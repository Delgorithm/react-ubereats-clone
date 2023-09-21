import React, { useState, useCallback } from 'react'
import { FaCodeMerge } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'
import { FaSistrix } from 'react-icons/fa6'
import { FaEllipsis } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import { mcdoItems, kfcItems, pokeItems } from '../SelectionTypeFood/Food'

function SelectionTypeStore() {
  
  const [productselected, setProductselected] = useState(0);
  
  const handleProductselected = () => {
    
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
              <button>
                {selectedItem.id === 1 && 
                  mcdoItems.map((step, index) => (
                    <div key={step.id} className='flex text-left items-center'>
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
              </button>
              <button>
                {selectedItem.id === 2 && 
                  kfcItems.map((step, index) => (
                    <div key={step.id} className='flex text-left items-center'>
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
              </button>
              <button>
                {selectedItem.id === 3 && 
                  pokeItems.map((step, index) => (
                    <div key={step.id} className='flex text-left items-center'>
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
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectionTypeStore