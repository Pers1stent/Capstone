import './App.css';
import {useState, useReducer} from 'react'
import Main from './Main';
import Home from './Home'
import Navbar from './Navbar'
import Menu from './Menu'
import Reservations from './Reservations'
import Login from './Login'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/Main" element={<Main/>}/>
              <Route path="/Menu" element={<Menu />} />
              <Route path='/Reservations' element={< Reservations/>} />
              <Route path='/Login' element ={<Login />}/>
            </Routes>
          </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
