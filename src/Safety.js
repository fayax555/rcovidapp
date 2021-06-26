import { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Safety.css';

export default function Safety() {
   const [current, setCurrent] = useState(0);
   const length = 6;

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   };

   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   };

   const slides = SliderData.map((slide, index) => (
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
         {index === current && (
            <div>
               <h2 style={{ backgroundColor: slide.color }}>{slide.title}</h2>
               <div className='box'>
                  <p>{slide.content}</p>
                  <img src={slide.image} alt='' className='slider-image' />
                  <ul
                     style={{
                        display:
                           index === SliderData.length - 1 ? 'block' : 'none',
                     }}
                  >
                     <li>Get Sleep</li>
                     <li>Be Physically Active</li>
                     <li>Manage Your Stress</li>
                     <li>Drink Plenty of Fluids</li>
                     <li>Eat Nutritious Foods</li>
                  </ul>
               </div>
            </div>
         )}
      </div>
   ));

   return (
      <div className='Safety'>
         <h1>SAFETY PRECAUTIONS</h1>
         <div className='Safety-Slider'>
            <FaArrowAltCircleLeft
               className='arrow left-arrow'
               onClick={prevSlide}
            />
            <FaArrowAltCircleRight
               className='arrow right-arrow'
               onClick={nextSlide}
            />

            {slides}
         </div>
      </div>
   );
}
