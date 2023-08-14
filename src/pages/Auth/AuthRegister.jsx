import React from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase-config';
import { current } from '@reduxjs/toolkit';


const Auth = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword
                );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }


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
                    placeholder='Email...'
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input 
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg'
                    placeholder='Mot de passe...'
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <button onClick={register} className=''>Créer le compte</button>
            </div>
        </div>
    </div>
  )
}

export default Auth