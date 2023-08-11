import React from 'react'


function SelectionTypeStore(props) {
  const markets = [
    { id: 1, img:'./img/carrefour-3.svg', name:'Carrefour'},
    { id: 2, img:'./img/super-u-1.svg', name:'Super U'},
    { id: 3, img:'./img/lidl-logo-1.svg', name:'Lidl'},
    { id: 4, img:'./img/bio-1.svg', name:'Bio'},
    { id: 5, img:'./img/picard.svg', name:'Picard'},
  ];

  return (
    <div className='flex justify-start items-center gap-5 p-5 w-screen'>
      {markets.map((item) => (
        <div key={item.id} className='w-20'>
          <img 
            src={item.img} 
            alt={item.name} 
            className='  rounded-full border'
          />
        </div>
      ))}
    </div>
  )
}

export default SelectionTypeStore