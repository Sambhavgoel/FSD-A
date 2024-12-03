import React from 'react';
import ImageApp from './components/ImageApp'
import MainLayout from './components/MainLayout.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import CounterApp from './components/CounterApp.jsx';
// import ImageApp from './components/ImageApp.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/counter' element={<CounterApp/>}/>
          <Route path='/image' element={<ImageApp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App