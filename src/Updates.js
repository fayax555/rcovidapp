import React, { useEffect, useState } from 'react';
import UseLocalStorageState from './hooks/useLocalStorageState';
import axios from 'axios';
import './Updates.css';

export default function Updates() {
   const initialdata = JSON.parse(
      window.localStorage.getItem('covidinfo') || '[]'
   );

   const [covidInfo, setCovidInfo] = UseLocalStorageState(
      'covidinfo',
      initialdata
   );
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      if (Object.keys(initialdata).length > 0) setLoading(false);
      async function getData() {
         const res = await axios.get(
            'https://fayaxcovidapimv.herokuapp.com/mihaaru'
         );
         setCovidInfo(res.data);

         if (Object.keys(initialdata).length === 0)
            window.localStorage.setItem('covidinfo', res.data);

         setLoading(false);
      }
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const {
      date,
      wTotal,
      wRecovered,
      wActive,
      wDeaths,
      newCases,
      total,
      active,
      recovered,
      deaths,
      vaccinated,
   } = covidInfo;

   if (loading)
      return <div style={{ marginTop: '13rem' }} className='loader'></div>;
   return (
      <div id='mainCard'>
         <h1 className='heading'>
            Latest Update <span className='date'>{date}</span>
         </h1>
         <div className='heading'>
            <div className='left'>
               <h2>Maldives</h2>
               <p></p>
            </div>
         </div>
         <div className='col col-1'>
            <div className='newCasesToday highlight'>
               <p className='num'>{newCases}</p>
               <p className='text'>
                  New Cases <br />
                  Today
               </p>
            </div>
            <div className='totalNumberOfCases highlight'>
               <p className='num'>{total}</p>
               <p className='text'>
                  Total Number
                  <br />
                  of Cases
               </p>
            </div>
            <div className='activeCases'>
               <p className='num'>{active}</p>
               <p className='text'>
                  Active
                  <br />
                  Cases
               </p>
            </div>
            <div className='recoveries'>
               <p className='num'>{recovered}</p>
               <p className='text'>Recoveries</p>
            </div>
            <div className='deaths'>
               <p className='num'>{deaths}</p>
               <p className='text'>Deaths</p>
            </div>
            <div className='vaccinated'>
               <p className='num'>{vaccinated}</p>
               <p className='text'>Vaccinated</p>
            </div>
         </div>
         <div className='heading c2'>
            <div className='left'>
               <h2>Worldwide</h2>
               <p></p>
            </div>
         </div>
         <div className='col col-2'>
            <div>
               <p className='num'>{wTotal}</p>
               <p className='text'>
                  Total Number
                  <br />
                  of Cases
               </p>
            </div>
            <div>
               <p className='num'>{wActive}</p>
               <p className='text'>Active Cases</p>
            </div>
            <div>
               <p className='num'>{wRecovered}</p>
               <p className='text'>Recoveries</p>
            </div>
            <div>
               <p className='num'>{wDeaths}</p>
               <p className='text'>Deaths</p>
            </div>
         </div>

         <div className='bottomText'>
            <p>source: mihaaru.com</p>
         </div>
      </div>
   );
}
