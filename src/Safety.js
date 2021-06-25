import React from 'react';
import './Safety.css';
import s1 from './img/safetyImages/s1.svg';
import s2 from './img/safetyImages/s2.svg';
import s3 from './img/safetyImages/s3.svg';
import s4 from './img/safetyImages/s4.svg';
import s5 from './img/safetyImages/s5.svg';
import s6 from './img/safetyImages/s6.svg';

export default function Safety() {
   const safetyContainer = document.querySelector('.safetyContainer');
   const imgContent = document.querySelectorAll('.safetyContainer > div');

   const prevBtn = document.querySelector('#prevBtn');
   const nextBtn = document.querySelector('#nextBtn');

   let counter = 1;
   const size = imgContent[0].clientWidth;

   safetyContainer.style.transform = `translateX(${-size * counter}px)`;

   nextBtn.addEventListener('click', (e) => {
      if (counter >= imgContent.length - 1) return;
      safetyContainer.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      safetyContainer.style.transform = `translateX(${-size * counter}px)`;
   });

   prevBtn.addEventListener('click', (e) => {
      if (counter <= 0) return;
      safetyContainer.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      safetyContainer.style.transform = `translateX(${-size * counter}px)`;
   });

   safetyContainer.addEventListener('transitionend', (e) => {
      console.log('fired');
      if (imgContent[counter].id === 'lastClone') {
         safetyContainer.style.transition = 'none';
         counter = imgContent.length - 2;
         safetyContainer.style.transform = `translateX(${-size * counter}px)`;
      }
      if (imgContent[counter].id === 'firstClone') {
         safetyContainer.style.transition = 'none';
         counter = imgContent.length - counter;
         safetyContainer.style.transform = `translateX(${-size * counter}px)`;
      }
   });

   return (
      <div className='Safety'>
         <i className='arrow left' id='prevBtn'></i>
         <i className='arrow right' id='nextBtn'></i>
         <h2>SAFETY PRECAUTIONS</h2>
         <div className='safetyContainer'>
            <div className='s6' id='lastClone'>
               <h3>PRACTICE OTHER GOOD HEALTH HABITS</h3>
               <div className='box'>
                  <div>
                     <p>
                        Routinely clean and disinfect frequently touched objects
                        and surfaces.
                     </p>
                     <ul>
                        <li>Get Sleep</li>
                        <li>Be Physically Active</li>
                        <li>Manage Your Stress</li>
                        <li>Drink Plenty of Fluids</li>
                        <li>Eat Nutritious Foods</li>
                     </ul>
                  </div>
                  <img src={s6} alt='' />
               </div>
            </div>
            <div className='s1'>
               <h3>AVOID CLOSE CONTACT</h3>
               <div className='box'>
                  <p>
                     Avoid close contact with sick people, and when you're sick,
                     maintain distance at least 6-ft
                  </p>
                  <img src={s1} alt='' />
               </div>
            </div>
            <div className='s2'>
               <h3>STAY HOME WHEN YOU ARE SICK</h3>
               <div className='box'>
                  <p>
                     If you feel sick, go home to prevent the spread of germs,
                     and remain at home until better
                  </p>
                  <img src={s2} alt='' />
               </div>
            </div>
            <div className='s3'>
               <h3>COVER YOUR MOUTH AND NOSE</h3>
               <div className='box'>
                  <p>
                     Cough or sneeze into a tissue, then throw the tissue in the
                     trash
                  </p>
                  <img src={s3} alt='' />
               </div>
            </div>
            <div className='s4'>
               <h3>CLEAN YOUR HANDS</h3>
               <div className='box'>
                  <p>
                     Wash your hands with soap and water for 20 seconds. Or use
                     an alcohol-based hand rub
                  </p>
                  <img src={s4} alt='' />
               </div>
            </div>
            <div className='s5'>
               <h3>AVOID TOUCHING, YOUR EYES, NOSE OR MOUTH</h3>
               <div className='box'>
                  <p>
                     Cough or sneeze into a tissue, then throw the tissue in the
                     trash
                  </p>
                  <img src={s5} alt='' />
               </div>
            </div>
            <div className='s6'>
               <h3>PRACTICE OTHER GOOD HEALTH HABITS</h3>
               <div className='box'>
                  <div>
                     <p>
                        Routinely clean and disinfect frequently touched objects
                        and surfaces.
                     </p>
                     <ul>
                        <li>Get Sleep</li>
                        <li>Be Physically Active</li>
                        <li>Manage Your Stress</li>
                        <li>Drink Plenty of Fluids</li>
                        <li>Eat Nutritious Foods</li>
                     </ul>
                  </div>
                  <img src={s6} alt='' />
               </div>
            </div>
            <div className='s1' id='firstClone'>
               <h3>AVOID CLOSE CONTACT</h3>
               <div className='box'>
                  <p>
                     Avoid close contact with sick people, and when you're sick,
                     maintain distance at least 6-ft
                  </p>
                  <img src={s1} alt='' />
               </div>
            </div>
         </div>
      </div>
   );
}
