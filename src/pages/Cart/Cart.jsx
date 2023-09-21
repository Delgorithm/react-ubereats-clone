import React from 'react';
import FooterMobile from '../../components/Footer/FooterMobile';
import { FaReceipt } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SelectionTypeStore from '../../components/SelectionTypeStore/SelectionTypeStore';
// import { mcdoItems, kfcItems, pokeItems } from '../SelectionTypeFood/Food'



function Cart() {

  const isEmpty = false;

  return (
    <>
      <div className='m-4'>
        <div className='flex items-center justify-end'>
          <Link to='/Orders'>
            <button className='flex items-center bg-gray-200 p-2 rounded-full active:bg-black active:text-white'>
              <FaReceipt />Commandes
            </button>
          </Link>
        </div>
        <div>
          <p className='text-3xl font-semibold pb-10'>Paniers</p>
        </div>
        {isEmpty ? (
          <div className='flex flex-col p-4 items-center'>
            <picture>
              <img src='./img/shopping-cart.png' alt='Shopping cart' width={100} height={100} />
            </picture>
            <p className='font-semibold text-center w-9/12 p-4'>Ajoutez des articles pour commencer un panier</p>
            <p className='font-light text-center w-[90%] p-4'>
              Une fois que vous avez ajouté des plats d'un restaurant ou les articles d'un magasin, votre panier s'affiche ici.
            </p>
            <Link to='/Bordeaux'>
              <button className='bg-gray-200 text-black p-2 rounded-full active:opacity-70'>Effectuer les achats</button>
            </Link>
          </div>
        ) : (
          <>
            <h1>test</h1>
          </>
        )}
      </div>
      <FooterMobile />
    </>
  );
};

export default Cart;
