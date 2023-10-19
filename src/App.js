import './App.css';
import {useState, useReducer} from 'react'
import Main from './Main';
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Main/>
        <Footer />
      </>
    </Router>
  );
}

export default App;
