import React, { useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';


const AuthRegister = () => {
    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }


  return (
    <div className='h-full'>
        <nav className='xsm:h-12 md:h-20 w-full bg-black'>
            <Link to="/">
                <button className='flex gap-1 text-white xsm:text-xl xsm:py-2 xsm:px-10 md:text-3xl md:py-5'>Uber 
                    <span className='text-green-400'>Eats</span>
                </button>
            </Link>
        </nav>
        <div className='flex flex-col items-center h-screen'>
            <div className='flex flex-col items-center justify-center h-3/4'>
                <h3>Créez un compte</h3>
                <input
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg' 
                    placeholder='Email...'
                    onChange={(e) => {
                        setRegisterEmail(e.target.value);
                    }}
                />
                <input 
                    className='p-2 m-2 border border-solid border-gray-400 rounded-lg'
                    placeholder='Mot de passe...'
                    onChange={(e) => {
                        setRegisterPassword(e.target.value);
                    }}
                />
                <button 
                    onClick={onSubmit} 
                    className='bg-green-400 px-10 py-2 m-2 rounded-lg active:opacity-70'>Créer le compte
                </button>
                <p className='my-2'>Vous avez déjà un compte ? <Link to="/AuthLogin">Connectez-vous</Link></p>
            </div>
        </div>
    </div>
  )
}

export default AuthRegister