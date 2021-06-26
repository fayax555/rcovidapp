/* eslint-disable no-unused-vars */
import { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Safety from './Safety';
import Updates from './components/Updates';
import Wash from './components/Wash';

function App() {
   const [page, setPage] = useState('home');
   const [isUpdate, setIsUpdate] = useState(false);

   const renderPage = () => {
      if (page === 'home') {
         return <Home setPage={setPage} setIsUpdate={setIsUpdate} />;
      }
      if (page === 'safety') {
         return <Safety />;
      }

      if (page === 'wash') {
         return <Wash />;
      }
   };

   return (
      <div className='App'>
         <Navbar setPage={setPage} setIsUpdate={setIsUpdate} />

         {!isUpdate && renderPage()}

         <div style={{ display: isUpdate ? 'block' : 'none' }}>
            <Updates />
         </div>
      </div>
   );
}

export default App;
