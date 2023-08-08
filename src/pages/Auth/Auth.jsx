import React from 'react'

const Auth = () => {
  return (
    <div className='h-full'>
        <nav className='xsm:h-12 md:h-20 w-full bg-black'>
            <p className='flex gap-1 text-white xsm:text-xl xsm:py-2 xsm:px-10 md:text-3xl md:py-5'>Uber 
                <span className='text-green-400'>Eats</span>
            </p>
        </nav>
        <div className='flex flex-col justify-center h-full xsm:p-20 text-center'>
            <div>
                <h3>Créez un compte</h3>
                <input
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg' 
                    placeholder='Email...' />
                <input 
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg'
                    placeholder='Mot de passe...'/>
                <button className=''>Créer le compte</button>
            </div>
            <div>
                <h3 className='pt-20'>Login</h3>
                <input 
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg'
                    placeholder='Email...' />
                <input 
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg'
                    placeholder='Mot de passe...' />
                <button className=''>Se connecter</button>
            </div>

        </div>
    </div>
  )
}

export default Auth