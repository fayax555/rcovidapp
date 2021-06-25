import React from 'react';
import './Navbar.css';

export default function Navbar({ setPage,setIsUpdate }) {
   const changePage = (newPage) => {
      setPage(newPage);
      setIsUpdate(false)
   };

   return (
      <div className='Navbar'>
         <button
            onClick={() => changePage('home')}
            id='home'
            className='btnHome btn'
         >
            Home
         </button>
         <button id='credits' className='btnCredits btn'>
            Credits
         </button>
         <button id='settings' className='btn'>
            Settings
         </button>
      </div>
   );
}
