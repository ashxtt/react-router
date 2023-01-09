import React from 'react';
import {Route, Routes} from "react-router-dom"
import './index.css';
import About from './pages/About';
import Main from './pages/Main';
import Stock from './pages/Stock';
import Stocks from './pages/Stocks';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/'element={<Main />} />
        <Route path='/about'element={<About />} />
        <Route path='/stocks/:symbol'element={<Stock />} />
        <Route path='/stocks'element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
