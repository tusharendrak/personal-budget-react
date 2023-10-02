import React from 'react';
import './App.css';


import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import NormalChart from './NormalChart/NormalChart';
import D3chart from './D3chart/D3chart';


function App() {

  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
      </div>
      <NormalChart/>
      <D3chart/>
      <Footer/>
    </Router>
  );
}

export default App;
