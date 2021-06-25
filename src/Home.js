import React from 'react';
import './Home.css';
import safetyImg from './img/homeImages/safety.jpg';
import washImg from './img/homeImages/wash.jpg';
import updatesImg from './img/homeImages/update.jpg';
import quizImg from './img/homeImages/quiz.jpg';

export default function Home({ setPage, setIsUpdate }) {
   const changePage = (newPage) => {
      setPage(newPage);
   };

   return (
      <div className='Home'>
         <div
            className='btnItem'
            style={{ backgroundImage: `url(${safetyImg})` }}
         />
         <div
            onClick={() => changePage('wash')}
            className='btnItem'
            style={{ backgroundImage: `url(${washImg})` }}
         />
         <div
            onClick={() => setIsUpdate(true)}
            className='btnItem'
            style={{ backgroundImage: `url(${updatesImg})` }}
         />
         <div
            className='btnItem'
            style={{ backgroundImage: `url(${quizImg})` }}
         />
      </div>
   );
}
