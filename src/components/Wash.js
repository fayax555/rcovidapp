import React, { useState } from 'react';
import './Wash.css';

let interval = null;
let sIterator = 0;

export default function Wash() {
   const [isPlaying, setIsPlaying] = useState(false);

   if (isPlaying === false) {
      clearInterval(interval);
   }

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

   const radioBtns = Array.from({ length: 10 }).map((btn, i) => (
      <input type='radio' name='r' id={`r${i + 1}`} />
   ));

   const labels = labelBtnArray.map((label, i) => (
      <label ref={label} for={`r${i + 1}`} className={`bar bar${i + 1}`}>
         {i + 1}
      </label>
   ));

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

   const washhtmlCode = textArray.map((text, i) => (
      <div className='slide'>
         <div className='washContainer'>
            <div className='washContent'>
               <img
                  src={require(`../img/washSvg/${i + 2}.svg`).default}
                  alt=''
               />
               <p className='number'>{i + 2}</p>
               <p className='text'>{text}</p>
            </div>
         </div>
      </div>
   ));

   const slideshow = () => {
      if (!isPlaying) {
         setIsPlaying(true);
         labelBtnArray[sIterator].current.click();
         new Audio(require(`../assets/washaudio/wash1.mp3`).default).play();
         interval = setInterval(() => {
            if (sIterator < 9) {
               labelBtnArray[sIterator + 1].current.click();
               new Audio(
                  require(`../assets/washaudio/wash${
                     sIterator + 2
                  }.mp3`).default
               ).play();
               sIterator++;
            } else if (sIterator >= 9) {
               setIsPlaying(false);
               sIterator = 0;
            }
         }, 3000);
      } else if (isPlaying) {
         setIsPlaying(false);
         sIterator = 0;
      }
   };

   const handleClick = () => {
      slideshow();
   };

   return (
      <div className='Wash'>
         <h2 className='washH2'>HOW TO WASH YOUR HANDS</h2>
         <div className='washbox'>
            <div className='btnStartBox'>
               <button
                  style={{ backgroundColor: !isPlaying ? 'green' : 'red' }}
                  className='btnStartSlides'
                  onClick={handleClick}
               >
                  {!isPlaying ? 'START' : 'STOP'}
               </button>
            </div>
            <div className='slidershow middle'>
               <div className='slides'>
                  {radioBtns}
                  <div className='slide s1'>
                     <div className='washContainer'>
                        <div className='washContent'>
                           <img
                              src={require('../img/washSvg/1.svg').default}
                              alt=''
                           />
                           <p className='number'>1</p>
                           <p className='text'>Wet hands with water</p>
                        </div>
                     </div>
                  </div>
                  {washhtmlCode}
               </div>
               <div className='navigation'>{labels}</div>
            </div>
         </div>
      </div>
   );
}
