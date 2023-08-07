import React from 'react'

const Searching = (props) => {
  return (
    <div>
        <input 
            type="text" 
            placeholder="Saisissez l'adresse de livraison."
            className={`w-96 p-3 rounded bg-gray-200 ${props.className}`}
        />
    </div>
  )
}

export default Searching