import { useState } from 'react';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Updates from './Updates';

function App() {
   const [page, setPage] = useState('home');

   const renderPage = () => {
      if (page === 'home') {
         return <Home setPage={setPage} />;
      }
      if (page === 'updates') {
         return <Updates />;
      }
   };

   return (
      <div className='App'>
         <Navbar setPage={setPage} />
         {renderPage()}
      </div>
   );
}

export default App;
