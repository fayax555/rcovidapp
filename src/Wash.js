/* eslint-disable no-unused-vars */
import React from 'react';
import './Wash.css';
import w1 from './img/washSvg/1.svg';
import w2 from './img/washSvg/2.svg';
import w3 from './img/washSvg/3.svg';
import w4 from './img/washSvg/4.svg';
import w5 from './img/washSvg/5.svg';
import w6 from './img/washSvg/6.svg';
import w7 from './img/washSvg/6.svg';
import w8 from './img/washSvg/6.svg';
import w9 from './img/washSvg/6.svg';
import w10 from './img/washSvg/6.svg';

export default function Wash() {
   let interval = null;
   let i = 0;
   let btnClickCounter = 0;

   const textArray = [
      'Apply soap',
      'Make sure to wash for at least 20 seconds',
      'Make sure to wash Palm and back of each hand',
      'Make sure to wash between fingers',
      'Make sure to wash under nails',
      'Make sure to wash thumbs',
      'Rinse well',
      'Dry hands with paper towel',
      'Turn off tap with paper towel',
   ];

   const imgObj = [w2, w3, w4, w5, w6, w7, w8, w9, w10];

   const washhtmlCode = textArray.map((text, i) => (
      <div className='slide'>
         <div className='washContainer'>
            <div className='washContent'>
               <img src={imgObj[i]} alt='' />
               <p className='number'>{i + 2}</p>
               <p className='text'>{text}</p>
            </div>
         </div>
      </div>
   ));

   const navBars = Array.from({ length: 10 }, (item, i) => (
      <label
         onClick={() => {
            console.log(i + 1);
         }}
         for={`r${i + 1}`}
         className={`bar bar${i + 1}`}
      >
         {i + 1}
      </label>
   ));

   const label1ref = React.useRef(null);
   const label2ref = React.useRef(null);
   const label3ref = React.useRef(null);
   const label4ref = React.useRef(null);
   const label5ref = React.useRef(null);
   const label6ref = React.useRef(null);
   const label7ref = React.useRef(null);
   const label8ref = React.useRef(null);
   const label9ref = React.useRef(null);
   const label10ref = React.useRef(null);

   const labelBtnArray = [
      label1ref,
      label2ref,
      label3ref,
      label4ref,
      label5ref,
      label6ref,
      label7ref,
      label8ref,
      label9ref,
      label10ref,
   ];

   const slideshow = () => {
      let interval = null;
      let sIterator = 0;

      interval = setInterval(() => {
         if (sIterator < 10) {
            labelBtnArray[sIterator].current.click();
            sIterator++;
            console.log(sIterator);
         } else {
            clearInterval(interval);
         }
      }, 200);
   };

   return (
      <div>
         <h2 className='washH2'>HOW TO WASH YOUR HANDS</h2>
         <div className='washbox'>
            <div className='btnStartBox'>
               <button className='btnStartSlides' onClick={slideshow}>
                  START
               </button>
            </div>

            <div className='slidershow middle'>
               <div className='slides'>
                  <input type='radio' name='r' id='r1' />
                  <input type='radio' name='r' id='r2' />
                  <input type='radio' name='r' id='r3' />
                  <input type='radio' name='r' id='r4' />
                  <input type='radio' name='r' id='r5' />
                  <input type='radio' name='r' id='r6' />
                  <input type='radio' name='r' id='r7' />
                  <input type='radio' name='r' id='r8' />
                  <input type='radio' name='r' id='r9' />
                  <input type='radio' name='r' id='r10' />
                  <div className='slide s1'>
                     <div className='washContainer'>
                        <div className='washContent'>
                           <img src={w1} alt='' />
                           <p className='number'>1</p>
                           <p className='text'>Wet hands with water</p>
                        </div>
                     </div>
                  </div>
                  {washhtmlCode}
               </div>

               <div className='navigation'>
                  <label ref={label1ref} for='r1' class='bar bar1'>
                     1
                  </label>
                  <label ref={label2ref} for='r2' class='bar bar2'>
                     2
                  </label>
                  <label ref={label3ref} for='r3' class='bar bar3'>
                     3
                  </label>
                  <label ref={label4ref} for='r4' class='bar bar4'>
                     4
                  </label>
                  <label ref={label5ref} for='r5' class='bar bar5'>
                     5
                  </label>
                  <label ref={label6ref} for='r6' class='bar bar6'>
                     6
                  </label>
                  <label ref={label7ref} for='r7' class='bar bar7'>
                     7
                  </label>
                  <label ref={label8ref} for='r8' class='bar bar8'>
                     8
                  </label>
                  <label ref={label9ref} for='r9' class='bar bar9'>
                     9
                  </label>
                  <label ref={label10ref} for='r10' class='bar bar10'>
                     10
                  </label>
               </div>
            </div>
         </div>
      </div>
   );
}
