import { useState} from 'react'


const Dropdown = (props) => {
    
    return (
        <div>
            <select className={`p-3 h-12 rounded ${props.className}`}>
                <option value="">Livrer maintenant</option>
                <option value="">Planifier pour plus tard</option>
            </select>
        </div>

  )
}

export default Dropdown