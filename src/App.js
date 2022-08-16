import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ofertas from './pages/Ofertas';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Faqs from './pages/Faqs'

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/ofertas" element={<Ofertas />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/main/faqs" element={<Faqs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
} export default App;


// https://www.youtube.com/watch?v=yBHEjEmk0ss&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=11