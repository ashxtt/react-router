
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Nav from './components/Nav';
import Main from './pages/Main';
import Stock from './pages/Stock';
import Stocks from './pages/Stocks';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/'element={<Main />} />
        <Route path='/about'element={<About />} />
        <Route path='/stocks'element={<Stocks />} />
        <Route path='/stocks/:symbol'element={<Stock />} />
      </Routes>
      
    </div>
  );
}

export default App;
